import React from 'react';

const MainContainer = (props) => {
  return (
    <div>
      <div className="pageheader">
        <div className="container">
          <h1>Book List App</h1>
          <p className="lead">There are a few books available. This is just a simple React project using Redux.</p>
        </div>
      </div>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default MainContainer;