import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Movies_list extends Component {

  componentWillMount() {
    this.props.moviesList()
  }

  renderList = (movies) => {
if(movies){
  return movies.map((movie)=>{
    return <div key={movie.id}>{movie.name}</div>
  })
}
  }
  render() {
    return (
      <div className="App">
        {this.renderList(this.props.movies)}
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

export default connect(mapStateToProps,actions)(Movies_list);
