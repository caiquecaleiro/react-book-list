import React, { Component } from 'react';

import MainContainer from './MainContainer';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <div className="row">
          <div className="col-md-6">
            <BookList />
          </div>
          <div className="col-md-6">
            <BookDetail />
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default App;