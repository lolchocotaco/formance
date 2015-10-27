import React from 'react';
import Draggable from 'react-draggable';

/*


************  You can't update the start position during a drag.



  */
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

  componentWillUnmount() {
    console.log('I should probably do something...');
    console.log(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.x !== this.state.left && nextProps.y!== this.state.top) {
      this.setState({
        position: {
          top: nextProps.y,
          left: nextProps.x
        }
      })
    }
  }

  handleStop = (e, ui) => {
    if (ui.position.top < 5 && ui.position.left < 5) {
      return this.props.onDelete();
    }
    this.props.onUpdate({
      x: ui.position.left,
      y: ui.position.top
    });
  }
  //TODO: Fix Position Bugs
  render() {
    return (
      <Draggable
          ref="draggable"
          bounds='parent'
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          onStart={this.handleStart}
          moveOnStartChange={true} // Moves the item if start changed
          start={{x: this.props.x, y: this.props.y}}
        >
        <g>
          <circle style={{cursor: 'move'}} r='25' height='100' width='100' stroke='white' strokeWidth='1' fillOpacity="0.80" ></circle>
          <text style={{cursor: 'move'}} fontSize="10px" textAnchor="middle" fill="white">{this.props.name}</text>
        </g>
      </Draggable>
    );
  }
}
