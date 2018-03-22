import React from 'react';
import spider from 'images/spider_home.svg';
import Flag from 'components/home/Flag';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import Image from 'images/one.jpg';
import styled from 'styled-components';

const Cover = () => (
	<section className="home__cover full">
		<div className="container cover__content">
			<div className="header-hero subcontainer">
				<h2>We inspire girls to change their world</h2>
				<p>This women's history month, support women who are changing the world.</p>
			</div>

			<ButtonDiv className="cover__buttons">
				<SlantedButton>
					<SlantedButtonContent>Give Monthly</SlantedButtonContent>
				</SlantedButton>
			</ButtonDiv>
		</div>
	</section>
);

export default Cover;

const ButtonDiv = styled.div`
  margin-top: 15px;
`

const SlantedButton = styled.button`
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0px;
	color: #ffffff;
	font-size: 16px;
	background: #e91e63;
	padding: 0 40px;
	text-decoration: none;
	-ms-transform: skewX(20deg);
	-webkit-transform: skewX(20deg);
	transform: skewX(20deg);
	height: 48px !important;

	&:hover {
		background: #c2185b;
		text-decoration: none;
	}
`;

const SlantedButtonContent = styled.span`
	-ms-transform: skewX(-20deg);
	-webkit-transform: skewX(-20deg);
	transform: skewX(-20deg);
	display: inline-block;
	vertical-align: middle;
	font-family: 'AvantGarde';
	font-weight: 900;
	text-transform: uppercase;
`;
