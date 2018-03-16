import React from 'react';
import Helmet from 'react-helmet';
import Board from 'components/home/Board';


const BoardPage = () => (
  <div className="home">
    <Helmet title="The Board" />

    <Board />
  </div>
);

export default BoardPage;
