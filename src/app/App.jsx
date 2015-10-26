import React from 'react';
import ReactDom from 'react-dom';
import {Grid, PageHeader, Row, Col} from 'react-bootstrap';
import InputBox from './components/InputBox.jsx';
import Stage from './components/Stage.jsx';

// import Stage from './components/Stage.jsx';

const testData = [
  {
    name: 'dancer1',
    x: 50,
    y: 30
  },
  {
    name: 'dancer2',
    x: 50,
    y: 100
  }
];

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
    dancer1: {
      x: 20 * (i + 1),
      y: 50 // Fixed
    },
    dancer2: {
      x: 50, // Fixed
      y: 20 * (i+1)
    }
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dance: mockData};
  }

  addDancer = (name) => {
    let dance = this.state.dance;
    const atTime = 0;
    if (dance[atTime][name]) {
      return alert('Dancer already exists bro.');
    }
    dance[atTime][name] ={
      x: 50,
      y: 50
    }
    this.setState({dance: dance});
  }

  render() {
    const title = this.props.title;
    const atTime = 0;
    const dancers = this.state.dance[atTime]; // Index is time
    return (
      <Grid>
        <PageHeader>{this.props.title}</PageHeader>
        <Row>
          <Col>
            <InputBox label='Add Dancer' onAdd={this.addDancer}/>
          </Col>
        </Row>
        <Stage dancers={dancers} />
      </Grid>
    );
  }
}

if ('object' === typeof window) {
  ReactDom.render(<App title='Formance'/>, document.getElementById('react-root'));
}
