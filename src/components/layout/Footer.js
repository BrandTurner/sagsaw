import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import Sag_Logo from 'images/SaveAGirl-logo-128.png';

class Footer extends Component {
	render() {
		return (
			<FooterDiv>
				<Container>
					<Row>
						<ColumnSpan>
							<FooterHTwo>Get Our Newsletter To Stay Up To Date</FooterHTwo>
							<form>
								<SkewedLabel>
									<SkewedInput type="text" name="first_name" placeholder="First Name" />
								</SkewedLabel>
								<SkewedLabel>
									<SkewedInput type="text" name="last_name" placeholder="Last Name" />
								</SkewedLabel>
								<SkewedLabel>
									<SkewedInput type="text" name="email" placeholder="Email" />
								</SkewedLabel>
								<SkewedButton>
									<Icon type="arrow-right" style={{ fontSize: 40, color: '#fff' }} />
								</SkewedButton>
							</form>
						</ColumnSpan>
					</Row>
					<BottomRow>
						<ColumnSpanTwo>
							<FooterLogo src={Sag_Logo} />
						</ColumnSpanTwo>
						<ColumnSpanTen>
							<TopNav>
								<ul style={{ listStyle: 'none', marginTop: 0, marginBottom: 0 }}>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<FooterLink>
											<span style={{ display: 'none' }}> </span>Work With Us
										</FooterLink>
									</li>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<FooterLink>
											<span style={{ display: 'none' }}> </span>Contact Us
										</FooterLink>
									</li>
									<li
										style={{
											display: 'inline-block',
											float: 'left',
											marginTop: 6,
											marginRight: 10,
										}}
									>
										<SocialLink>
											<Icon type="facebook" style={{ fontSize: 32, color: '#fff' }} />
										</SocialLink>
									</li>
									<li
										style={{
											display: 'inline-block',
											float: 'left',
											marginTop: 6,
											marginRight: 10,
										}}
									>
										<SocialLink>
											<Icon type="instagram" style={{ fontSize: 32, color: '#fff' }} />
										</SocialLink>
									</li>
									<li
										style={{
											display: 'inline-block',
											float: 'left',
											marginTop: 6,
											marginRight: 10,
										}}
									>
										<SocialLink>
											<Icon type="youtube" style={{ fontSize: 32, color: '#fff' }} />
										</SocialLink>
									</li>
								</ul>
							</TopNav>
							<TopNav>
								<ul style={{ listStyle: 'none', marginTop: 20 }}>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<FirstBottomLink>Financial Overview and Transparency Report</FirstBottomLink>
									</li>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<BottomLink>Privacy Policy</BottomLink>
									</li>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<BottomLink>Terms of Use</BottomLink>
									</li>
									<li style={{ display: 'inline-block', float: 'left' }}>
										<BottomLink>Website by Umbrella Corp.</BottomLink>
									</li>
								</ul>
							</TopNav>
						</ColumnSpanTen>
					</BottomRow>
				</Container>
			</FooterDiv>
		);
	}
}

export default Footer;

const FirstBottomLink = styled.a`
	padding: 0 15px 0 0;
	color: #716b70;
	display: block;
	text-align: left;
	border-right: 1px #716b70 solid;
	line-height: 20px;
	font-size: 18px;
	font-family: 'Lato';
	outline: 0 !important;
	text-decoration: none;
	-webkit-appearance: none;
	box-shadow: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
`;

const BottomLink = styled.a`
	padding: 0 15px 0 15px;
	color: #716b70;
	display: block;
	text-align: left;
	border-right: 1px #716b70 solid;
	line-height: 20px;
	font-size: 18px;
	font-family: 'Lato';
	outline: 0 !important;
	text-decoration: none;
	-webkit-appearance: none;
	box-shadow: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
`;

const BottomNav = styled.div`
	overflow: hidden;
	padding-left: 60px;
`;

const SocialLink = styled.a`
	line-height: 40px;
	display: block;
	width: 40px;
	height: 40px;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
	border-radius: 100%;
	color: #fff;
	outline: 0 !important;
	text-decoration: none;
	outline: 0;
	-webkit-appearance: none;
	box-shadow: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
`;

const FooterLink = styled.a`
	background-attachment: scroll;
	background-clip: border-box;
	background-color: rgba(0, 0, 0, 0);
	background-image: url('https://acumen.org/wp-content/themes/acumen-theme/img/global/icon-right-arrow.png');
	background-origin: padding-box;
	background-position: 0px 11px;
	background-position-x: 0px;
	background-position-y: 11px;
	background-repeat: no-repeat;
	background-size: 15px auto;
	border-bottom-color: rgb(255, 255, 255);
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-image-outset: 0;
	border-image-repeat: stretch stretch;
	border-image-slice: 100%;
	border-image-source: none;
	border-image-width: 1;
	border-left-color: rgba(0, 0, 0, 0);
	border-left-style: solid;
	border-left-width: 1px;
	border-right-color: rgba(0, 0, 0, 0);
	border-right-style: solid;
	border-right-width: 1px;
	border-top-color: rgba(0, 0, 0, 0);
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-top-style: solid;
	border-top-width: 1px;
	box-shadow: none;
	box-sizing: border-box;
	color: rgb(255, 255, 255);
	display: inline-block;
	font-family: 'AvantGarde';
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 20px;
	list-style-image: none;
	list-style-position: outside;
	list-style-type: none;
	margin-right: 25px;
	outline-color: rgb(255, 255, 255);
	outline-style: none;
	outline-width: 0px;
	padding-bottom: 5px;
	padding-left: 24px;
	padding-right: 0px;
	padding-top: 8px;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-decoration-color: rgb(255, 255, 255);
	text-decoration-line: none;
	text-decoration-style: solid;
	text-transform: uppercase;
	touch-action: manipulation;
	transition-delay: 0s;
	transition-duration: 0.15s;
	transition-property: all;
	transition-timing-function: ease-in-out;
	vertical-align: middle;
	white-space: nowrap;
`;

const TopNav = styled.div`
	overflow: hidden;
	padding-left: 60px;
`;

const FooterHTwo = styled.h2`
	font-size: 32px;
	letter-spacing: 0.5px;
	line-height: 1.2em;
	font-family: 'AvantGardeLight', Arial, Helvetica, sans-serif;
	text-transform: uppercase;
	margin-bottom: 40px;
	color: #fff !important;
`;

const SkewedLabel = styled.label`
	border: 1px solid white;
	border-radius: 0;
	border-right: none;
	padding: 3px 10px;
	-moz-transform: skewX(16deg);
	-webkit-transform: skewX(16deg);
	-o-transform: skewX(16deg);
	-ms-transform: skewX(16deg);
	transform: skewX(16deg);
	background: #322b2b;
	height: 60px;
	max-width: 200px;
	display: inline-block;
`;

const SkewedInput = styled.input`
	vertical-align: bottom;
	background: #322b2b;
	padding: 3px 10px;
	border: 0;
	-moz-transform: skewX(-16deg);
	-webkit-transform: skewX(-16deg);
	-o-transform: skewX(-16deg);
	-ms-transform: skewX(-16deg);
	transform: skewX(-16deg);
	margin-left: 16px;
	padding: 16px 10px 12px;
	font-family: 'AvantGarde', Arial, Helvetica, sans-serif;
	color: #fff;
	height: 55px;
	font-size: 18px;
	font-weight: 400;
	text-transform: uppercase;
`;

const SkewedButton = styled.button`
	border: 1px solid white;
	border-radius: 0;
	padding: 3px 10px;
	-moz-transform: skewX(16deg);
	-webkit-transform: skewX(16deg);
	-o-transform: skewX(16deg);
	-ms-transform: skewX(16deg);
	transform: skewX(16deg);
	background: #322b2b;
	height: 60px;
	max-width: 200px;
	vertical-align: bottom;
	display: inline-block;
`;

const SkewedList = styled.li`
	display: inline-block;
	transition: background 0.2s;
	transform: skew(20deg); /* SKEW */
	background: #000;
`;

const SkewedListLink = styled.a`
	display: block;
	text-decoration: none;
	padding: 5px 10px;
	font: 30px 1 sans-serif;
	transform: skew(-20deg); /* INVERSE SKEW */
	color: #0bf;
`;

const FooterDiv = styled.footer`
	padding: 80px 0;
	background: #322b2b;
`;

const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	max-width: 1220px;
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
`;

const BottomRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
	padding-top: 90px;
`;

const ColumnSpan = styled.div`
	grid-column: span 12;
`;

const ColumnSpanTwo = styled.div`
	grid-column: span 2;
	height: 103px;
`;

const ColumnSpanTen = styled.div`
	grid-column: span 10;
`;

const FooterLogo = styled.img`
	width: auto;
	height: 100%;
	border-style: none;
	display: block;
`;
