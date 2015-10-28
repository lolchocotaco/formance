/*eslint no-console: 0*/
import React from 'react';
import ReactDom from 'react-dom';
import {Grid, PageHeader, Row, Col, Button} from 'react-bootstrap';
import InputBox from './components/InputBox.jsx';
import Stage from './components/Stage.jsx';
import Player from './components/Player.jsx';

// Find dancers by indexing with `dancer`
// timestamp: {
//   dancer: {
//     x: Number
//     y: Number
//   }
// }

let mockData = {};
for (let i = 0; i< 1 ; i++) {
  mockData[i] = {
    Norman: {
      x: 50 * (i + 1),
      y: 100 // Fixed
    },
    Giraffe: {
      x: 100, // Fixed
      y: 50 * (i+1)
    }
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dance: {0: {}}, atTime: 0, playerTime: 0};
  }

  addDancer = (name) => {
    let dance = this.state.dance;
    const atTime = this.state.atTime;
    if (dance[atTime][name]) {
      return alert('Dancer already exists bro.');
    }
    dance[atTime][name] = {x: 50, y: 50}
    this.setState({dance: dance});
  }

  addFormation = () => {
    if(this.state.playerTime === this.state.atTime) return;
    const playerTime = this.state.playerTime;
    const prevForm = this.state.dance[this.state.atTime];
    let dance = this.state.dance;
    dance[playerTime] =Object.assign({}, prevForm);
    // dance[playerTime] = prevForm;
    this.setState({dance: dance, atTime: playerTime});
  }

  onUpdate = (name, pos) => {
    let dance = this.state.dance;
    const atTime = this.state.atTime;
    if (!dance[atTime][name]) {
      console.error('Oops the person doesn\'t exist');
    }

    dance[atTime][name] = pos;
    this.setState({dance: dance});
  }

  onDelete = (name) => {
    let dance = this.state.dance;
    const atTime = this.state.atTime;
    if (!dance[atTime][name]) {
      console.error('Oops the person doesn\'t exist');
    }

    delete dance[atTime][name];
    console.log(dance);
    this.setState({dance: dance});
  }

  onTimeChange = (e) => {
    if (!this.state.dance[e.target.value]) {
      return this.setState({playerTime: e.target.value});
    }
    this.setState({playerTime: e.target.value, atTime: e.target.value});
  }
  // Stage is fixed at 800px x 500px
  render() {
    const title = this.props.title;
    const atTime = this.state.atTime;
    const dancers = this.state.dance[atTime]; // Index is time
    return (
      <Grid style={{width: '800px'}}>
        <PageHeader>{this.props.title}</PageHeader>
        <Row>
          <Col sm={4}>
            <InputBox label='Add Dancer' onAdd={this.addDancer}/>
          </Col>
          <Col sm={4}>

          </Col>
          <Col sm={4}>
            <Button  className='pull-right' bsStyle='success' style={{marginTop: '20px'}} onClick={this.addFormation}>
              <i className='fa fa-plus'> </i>  Add Formation
              </Button>
          </Col>
        </Row>
        <Stage dancers={dancers}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
          />
        <Player ref="player" onTimeChange={this.onTimeChange} min={0} max={100}/>
      </Grid>
    );
  }
}

if ('object' === typeof window) {
  ReactDom.render(<App title='Formance'/>, document.getElementById('react-root'));
}
