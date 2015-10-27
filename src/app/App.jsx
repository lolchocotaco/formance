/*eslint no-console: 0*/
import React from 'react';
import ReactDom from 'react-dom';
import {Grid, PageHeader, Row, Col} from 'react-bootstrap';
import InputBox from './components/InputBox.jsx';
import Stage from './components/Stage.jsx';

// Find dancers by indexing with `dancer`
// timestamp: {
//   dancer: {
//     x: Number
//     y: Number
//   }
// }

let mockData = {};
for (let i = 0; i< 10 ; i++) {
  mockData[i] = {
    Norman: {
      x: 50 * (i + 1),
      y: 100 // Fixed
    },
    Ahmed: {
      x: 100, // Fixed
      y: 50 * (i+1)
    }
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dance: mockData, atTime: 0};
  }

  addDancer = (name) => {
    let dance = this.state.dance;
    const atTime = this.state.atTime;
    if (dance[atTime][name]) {
      return alert('Dancer already exists bro.');
    }
    dance[atTime][name] ={
      x: 50,
      y: 50
    }

    this.setState({dance: dance});
  }

  onUpdate = (name, pos) => {
    let dance = this.state.dance;
    const atTime = 0;
    if (!dance[atTime][name]) {
      console.error('Oops the person doesn\'t exist');
    }

    dance[atTime][name] = pos;
    this.setState({dance: dance});
  }

  onDelete = (name) => {
    let dance = this.state.dance;
    const atTime = 0;
    if (!dance[atTime][name]) {
      console.error('Oops the person doesn\'t exist');
    }

    delete dance[atTime][name];
    this.setState({dance});
  }

  onTimeChange = (e) => {
    this.setState({atTime: e.target.value});
  }

  render() {
    const title = this.props.title;
    const atTime = this.state.atTime;
    const dancers = this.state.dance[atTime]; // Index is time
    return (
      <Grid>
        <PageHeader>{this.props.title}</PageHeader>
        <Row>
          <Col>
            <InputBox label='Add Dancer' onAdd={this.addDancer}/>
          </Col>
        </Row>
        <Stage dancers={dancers}
          onDelete={this.onDelete}
          onUpdate={this.onUpdate}
          />
        <Row><Col>
          <input
            type="range"
            min="0"
            max="10"
            value={this.state.atTime}
            step="1"
            onChange={this.onTimeChange}
            label="Select Time"/>
        </Col>

          </Row>
      </Grid>
    );
  }
}

if ('object' === typeof window) {
  ReactDom.render(<App title='Formance'/>, document.getElementById('react-root'));
}
