import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Dancer from './Dancer.jsx';
/*
  Props:
    dancers: {
      name: {
        x: Number
        y: Number
      }
    }
*/
export default class Stage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const dancers = Object.keys(this.props.dancers).map((name, i) => {
      const dancer = this.props.dancers[name];
      console.log(dancer);
      return <Dancer x={dancer.x} y={dancer.y} key={i} name={name}
        onDelete={this.props.onDelete.bind(null, name)}
        onUpdate={this.props.onUpdate.bind(null, name)}/>
    });
    return (
      <Row>
        <Col style= {{
          width: '100%',
          height: '75%',
          position: 'relative',
          border: '1px solid rgba(153, 153, 153, 0.46)',
          borderRadius: '20px'
        }}>
          <svg style={{
            position: 'relative',
            height: '100%',
            width: '100%'
          }}>
            {dancers}
          </svg>
        </Col>
      </Row>
    )
  }
}
