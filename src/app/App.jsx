import React from 'react';
import ReactDom from 'react-dom';
import {Grid, PageHeader} from 'react-bootstrap';
import Dancer from './components/Dancer.jsx';

export default class App extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <Grid>
        <PageHeader>{this.props.title}</PageHeader>
        <Dancer x='50' y='30'/>
        <Dancer x='100' y='30'/>

      </Grid>
    );
  }
}

if ('object' === typeof window) {
  ReactDom.render(<App title='Formance'/>, document.getElementById('react-root'));
}
