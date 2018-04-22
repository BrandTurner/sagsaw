import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import boardInfo from './members.json';
import BoardObject from './BoardObject';
import Sidebar from 'react-sidebar';
import { Icon } from 'semantic-ui-react';

import spider from 'images/spider_home.svg';
import Flag from 'components/home/Flag';
import Image from 'images/one.jpg';
import styled from 'styled-components';

const test = [];

const siderStyles = {
	root: {
		position: 'relative',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		height: '1000px',
		overflow: 'hidden',
	},
	sidebar: {
		zIndex: 3,
		position: 'absolute',
		top: 0,
		bottom: 0,
		transition: 'transform .3s ease-out',
		WebkitTransition: '-webkit-transform .3s ease-out',
		willChange: 'transform',
		overflowY: 'auto',
		backgroundColor: 'white',
	},
	content: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflowY: 'scroll',
		WebkitOverflowScrolling: 'touch',
		transition: 'left .3s ease-out, right .3s ease-out',
	},
	overlay: {
		zIndex: 1,
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: 0,
		visibility: 'hidden',
		transition: 'opacity .3s ease-out, visibility .3s ease-out',
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	dragHandle: {
		zIndex: 1,
		position: 'fixed',
		top: 0,
		bottom: 0,
	},
};

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: false,
			sidebarLocation: '',
			sidebarName: '',
			sidebarPosition: '',
			sidebarBio: '',
			sidebarInfo: {},
			sidebar: {},
		};
		this.info = this.info.bind(this);
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
		this.menuButtonClick = this.menuButtonClick.bind(this);
		this.closeSider = this.closeSider.bind(this);
		this.setSidebarContent = this.setSidebarContent.bind(this);
	}

	info() {
		console.log('bar');
	}

	menuButtonClick(ev) {
		console.log('rar');
		ev.preventDefault();
		this.onSetSidebarOpen(!this.state.sidebarOpen);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}

	closeSider() {
		this.setState({
			sidebarOpen: false,
		});
	}

	setSidebarContent(sidebarInfo) {
		this.setState({
			sidebarLocation: sidebarInfo.sidebarLocation,
			sidebarName: sidebarInfo.sidebarName,
			sidebarPosition: sidebarInfo.sidebarPosition,
			sidebarBio: sidebarInfo.sidebarBio,
			sidebarImage: sidebarInfo.sidebarImage,
			sidebarInfo,
		});
		console.log('info', sidebarInfo);
		console.log('all set!');
	}

	render() {
		const buttonStyle = {
			backgroundColor: '#7C4DFF',
		};

		const buttonStyleTrans = {
			backgroundColor: 'transparent',
			border: '2px solid white',
		};

		const backgroundImageStyle = {
			backgroundImage: 'url(https://acumen.org/wp-content/uploads/2017/04/Andrea-Soros-580x460.png)',
		};

		const backgroundImgStyle = {
			background: 'url(https://acumen.org/wp-content/uploads/2017/04/Andrea-Soros-580x460.png)',
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
		};

		const flexItem = {
			background: 'tomato',
			padding: '5px',
			width: '200px',
			height: '150px',
			marginTop: '10px',

			lineHeight: '150px',
			color: 'white',
			fontWeight: 'bold',
			fontSize: '3em',
			textAlign: 'center',
		};

		const sideBarContent = (
			<div className="sider" id="sider" ref="sider">
				<div className="profile" onClick={this.closeSider}>
					<TopSection>
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<div>
								<img src={this.state.sidebarImage || ''} className="sider-image" />
							</div>
							<div><Icon color="gray" size="huge" name="close"/></div>
						</div>
					</TopSection>
					<div>
						<h2 className="board-loc">{this.state.sidebarLocation}</h2>
						<span className="about-about-desc" onClick={this.closeSider}>
							{this.state.sidebarName || 'rar'}
						</span>
						<span className="about-about-board-desc">{this.state.sidebarPosition}</span>
					</div>
					<div className="bio" style={{ marginTop: '25px' }}>
						<p className="about-about-desc" dangerouslySetInnerHTML={{ __html: this.state.sidebarBio }} />
					</div>
				</div>
			</div>
		);
		return (
			<Sidebar
				sidebar={sideBarContent}
				open={this.state.sidebarOpen}
				onSetOpen={this.onSetSidebarOpen}
				styles={siderStyles}
			>
				<section className="home__board home__ecosystem home__sag">
					<BoardObject
						boardJson={boardInfo}
						setSidebarContent={this.setSidebarContent}
						openSidebar={this.onSetSidebarOpen}
					/>
				</section>
			</Sidebar>
		);
	}
}

export default Board;

const Row = styled.div`
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-ms-flex-wrap: wrap;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	min-height: 430px;
`;

const TopSection = styled.div`
	height: auto;
	margin-bottom: 20px;
`;

const POne = styled.p`
	font-size: 16px !important;
	font-family: 'AvantGarde' !important;
	text-transform: uppercase;
	letter-spacing: 1px !important;
	line-height: 28px !important;
	font-weight: bold !important;
`;
const WeAreStrong = styled.strong`
	font-family: 'AvantGardeLight' !important;
	font-weight: 900 !important;
`;
const PTwo = styled.p`
	font-size: 32px !important;
	font-family: 'AvantGardeLight' !important;
	text-transform: uppercase;
	font-weight: 900 !important;
	letter-spacing: 0.5px !important;
	line-height: 40px !important;
`;

const HeroContent = styled.div`
	z-index: 10;
	padding: 40px 0;
	p {
		text-align: left !important;
	}
`;

const ColMdSeven = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;

	@media (min-width: 768px) {
		-ms-flex: 0 0 58.333333%;
		flex: 0 0 58.333333%;
		max-width: 58.333333%;
	}
`;

const ColMdFive = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	-ms-flex-item-align: left !important;
	align-self: left !important;
	float: right !important;
	z-index: 999;

	@media (min-width: 768px) {
		flex: 0 0 41.666667%;
		max: 41.666667%;
	}
`;

const LeftAlign = styled.p`
	text-align: left !important;
`;

const Container = styled.div`
position: relative;
top: -480px;
left: 50%

    padding-right: 15px;
    padding-left: 15px;
    width: 35%;
    min-height: 430px;
  @media(min-width: 1200 px)
   {
    max-width: 1220 px;
  }
@media(min-width: 992 px)
   {
    max-width: 960 px;
  }
@media(min-width: 768 px)
   {
    max-width: 720 px;
  }
@media(min-width: 576 px)
   {
    max-width: 540 px;
  }
@media(min-width: 1200 px)
   {
    max-width: 1140 px;
  }
@media(min-width: 992 px)
   {
    max-width: 960 px;
  }
@media(min-width: 768 px)
   {
    max-width: 720 px;
  }
@media(min-width: 576 px)
   {
    max-width: 540 px;
  }
`;

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
	display: block !important;

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
