import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

  componentWillMount() {
    this.props.moviesList()
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps,actions)(App);
