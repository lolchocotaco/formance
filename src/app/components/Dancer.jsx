import React from 'react';
import Draggable from 'react-draggable';

export default class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      position: {
        top: this.props.y,
        left: this.props.x
      }
    };
  }

  handleDrag = (e, ui) => {
    this.setState({
      position: ui.position
    });
  }
  render() {
    return (
      <Draggable
          bounds='parent'
          onDrag={this.handleDrag}
          start={{x: this.props.x, y: this.props.y}}
        >
          <circle style={{cursor: 'move'}} r='25' height='100' width='100'>hello</circle>
      </Draggable>
    );
  }
}
