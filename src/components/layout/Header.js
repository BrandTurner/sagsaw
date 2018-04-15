import React from 'react';
import links from 'data/menu';
import Link from 'gatsby-link';
// import LogoSpider from 'images/logo_spider.svg';
import SaveAGirlLogo from 'images/SaveAGirl-Logo-64.png';
import Logo from './Logo';
import Search from './Search';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import { Icon } from 'antd';

const nav = links.map(link => <MenuItem key={link.text} {...link} />);

const Header = () => (
	<header className="header openable">
		<Link to="/" className="header__logo">
			<img
				className="logo__spider"
				src={SaveAGirlLogo}
				alt="Save A Girl, Save A World"
				width="555"
				height="321"
			/>
			<Logo className="logo__text" />
		</Link>

		<nav className="header__nav">{nav}</nav>
		<nav className="header__nav" style={{ marginRight: 25 }}>
			<SlantedButton>
				<a href='https://www.paypal.com/donate/?token=rE2PS0459f1clT3P637nDDe3wMUjHOh7ujALV-t0FmZpWhEBpilDMyqz2cVpgwVTSMA6km&country.x=US&locale.x=US' target='_blank'>
          <SlantedButtonContent>Donate</SlantedButtonContent>
        </a>
			</SlantedButton>
		</nav>
		<nav className="header__social">
			<Icon type="facebook" style={{ fontSize: 32, color: '#C2185B' }} />
			<Icon type="instagram" style={{ fontSize: 32, color: '#C2185B' }} />
			<Icon type="youtube" style={{ fontSize: 32, color: '#C2185B' }} />
		</nav>
	</header>
);

export default Header;

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
