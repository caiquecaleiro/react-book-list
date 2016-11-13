import React, { Component } from 'react';

import MainContainer from './MainContainer';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3">
            <BookList />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9">
            <BookDetail />
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default App;