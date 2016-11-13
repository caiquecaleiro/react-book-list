import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          <div className>
            <div>
              <img src={book.image} title={book.title} />
            </div>
            <div>
              <span>{book.title}</span>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="book-list">
        <h5>Available Books:</h5>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

/**
 * Anything returned from this function will end up as props on
 * the BookList container.
 */
function mapDispatchToProps(dispatch) {
  // Whenever the selectBook is called, the result will  be passed 
  // to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);