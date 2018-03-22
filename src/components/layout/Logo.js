import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable max-len */

const Logo = ({ className }) => (
	<div className={className}>
		SAve A <LogoScript>girl</LogoScript>
		<br />
		SAVE A WORLD
	</div>
);

Logo.defaultProps = {
	className: '',
};

Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;

const LogoScript = styled.span`
	display: inline !important;
	text-transform: lowercase !important;
	font-size: 55px;
	z-index: 99;
`;

const Subscript = styled.span`
	text-align: center;
	font-family: 'AvantGardeLight';
`;
