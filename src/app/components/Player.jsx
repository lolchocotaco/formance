import React from 'react';
import {Row, Col} from 'react-bootstrap';


export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {atTime: 0}
  }

  onTimeChange = (e) => {
    this.setState({atTime: e.target.value}, ()=> {
      this.props.onTimeChange(e);
    });
  }
  render () {
    return (
      <Row>
        <Col>
          <input
            type="range"
            min={this.props.min}
            max={this.props.max}
            value={this.state.atTime}
            step="1"
            onChange={this.onTimeChange}
            label="Select Time"/>
        </Col>
      </Row>
    )

  }
}
