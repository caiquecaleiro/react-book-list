import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <h5>Select a book to see the details.</h5>;
    }

    return (
      <div>
        <h3>{this.props.book.title}</h3>
        <div className="col-md-3">
          <p>
            Author: {this.props.book.author}
          </p>
          <p>
            Pages: {this.props.book.pages}
          </p>
        <div className="col-md-3">
          <img src={this.props.book.image} />
        </div>
        </div>
        <div className="col-md-9">
        <p>
          {this.props.book.description}
        </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);