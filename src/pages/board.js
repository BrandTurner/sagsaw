import React from 'react';
import Helmet from 'react-helmet';
import Board from 'components/home/Board';
import BoardCover from 'components/home/BoardCover';
import BoardEcosystem from 'components/home/BoardEcosystem';

const BoardPage = () => (
	<div className="home">
		<Helmet title="The Board" />
    <BoardCover />
  <Board />
	</div>
);

export default BoardPage;
