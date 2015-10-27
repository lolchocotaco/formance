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

  componentWillUnmount() {
    console.log('I should probably do something...');
    console.log(this);
  }

  componentWillReceiveProps(nextProps) {
    // This isn't going to do anything.
    if(nextProps.x !== this.state.left && nextProps.y!== this.state.top) {
      this.setState({
        position: {
          top: nextProps.y,
          left: nextProps.x
        }
      })
    }
  }
  handleDrag = (e, ui) => {
    this.setState({
      position: ui.position
    });
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
    console.log('props=', this.props); // ALWAYS THE SAME ?????
    console.log('state=', this.state.position); // Mouse Position.... O_O
    return (
      <Draggable
          bounds='parent'
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          moveOnStartChange={true} // Moves the thing if start changed
          start={{x: this.props.x, y: this.props.y}}
        >
        <g>
          <circle style={{cursor: 'move'}} r='25' height='100' width='100'></circle>
          <text style={{cursor: 'move'}} fontSize="10px" textAnchor="middle" fill="white">{this.props.name}</text>
        </g>
      </Draggable>
    );
  }
}
