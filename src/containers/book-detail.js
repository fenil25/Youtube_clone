import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render() {
    if(!this.props.book)
      {return <h2> Select A Book To View Info On It</h2>;}
    return (
      <div>
        <h1>Details For</h1>
        <div>Title: {this.props.book.title}</div>
        <p>Pages: {this.props.book.pages}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
