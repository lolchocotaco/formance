import React from 'react';
import {Input, Button} from 'react-bootstrap'


export default class CustomInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      return this._handleClick();
    }
  }

  _handleChange =(e) => {
    this.setState({
      input: e.target.value
    });
  }
  _handleClick = (e) => {
    this.props.onAdd(this.state.input);
    this.setState({
      input: ''
    });
  };

  render() {
    const addButton = (<Button onClick={this._handleClick}>
        <i className='fa fa-plus'></i></Button>);
    return (
      <Input value={this.state.input}
        onKeyPress={this._handleKeyPress}
        onChange={this._handleChange}
        type="input"
        buttonBefore={addButton}
        label={this.props.label || ''}></Input>

    )
  }
}
