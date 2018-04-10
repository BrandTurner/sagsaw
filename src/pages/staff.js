import React from 'react';
import Helmet from 'react-helmet';
import Staff from 'components/home/Staff';

const StaffPage = () => (
	<div className="home">
		<Helmet title="The Board" />
      
		<Staff />
	</div>
);

export default StaffPage;
