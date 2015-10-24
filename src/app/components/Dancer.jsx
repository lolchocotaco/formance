import React from 'react';

export default class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
    };
  }

  selectElement(e) {
    const selectedElement = evt.target;
    const currentX = evt.clientX;
    const currentY = evt.clientY;
    const currentMatrix = selectedElement.getAttributeNS(null, 'transform').slice(7, -1).split(' ');

    for (var i = 0; i < currentMatrix.length; i++) {
      currentMatrix[i] = parseFloat(currentMatrix[i]);
    }

    selectedElement.setAttributeNS(null, 'onmousemove', this.moveElement);
  }

  moveElement(e) {

  }

  render() {
    return (
      <svg onmousedown={this.selectElement}>
          <circle style={{cursor: 'move'}} cx={this.state.x} cy={this.state.y} r='25' height='100' width='100'></circle>
      </svg>
    );
  }

  // render() {
  //   return (
  //     <SVGComponent height='100' width='100'>
  //         <Circle cx='50' cy='50' r='25' />
  //     </SVGComponent>
  //   );
  // }
}
