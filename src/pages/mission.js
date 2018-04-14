import React from 'react';
import Helmet from 'react-helmet';
import Mission from 'components/home/Mission';

const MissionPage = () => (
	<div className="home">
		<Helmet title="The Board" />

		<Mission />
	</div>
);

export default MissionPage;
