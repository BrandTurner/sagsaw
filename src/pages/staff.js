import React from 'react';
import Helmet from 'react-helmet';
import Staff from 'components/home/Staff';
import StaffCover from 'components/home/StaffCover';

const StaffPage = () => (
	<div className="home">
		<Helmet title="The Board" />
    <StaffCover />
		<Staff />
	</div>
);

export default StaffPage;
