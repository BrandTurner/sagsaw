import React from 'react';
import spider from 'images/spider_home.svg';
import Flag from 'components/home/Flag';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import Image from 'images/one.jpg';
import styled from 'styled-components';
import logo from '../../images/Save A Girl white text logo.png';

const Cover = () => (
	<section className="home__cover full">
		<div className="container cover__content2">
			<div className="header-hero subcontainer" st>
        {/* <h2>We inspire girls to change their world</h2> */}
         <img src={logo} style={{ height: 450, objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, .2)', borderRadius: '15px' }} />
			</div>

			<ButtonDiv className="cover__buttons" style= {{ position: 'absolute', bottom: '10%', left: 'calc(50% - 98px)'}} >
				<SlantedButton>
					<SlantedButtonContent>Donate Today</SlantedButtonContent>
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
