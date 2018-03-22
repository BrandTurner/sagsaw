import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import adminImage from 'images/admin_component.svg';
import scaffoldingImage from 'images/scaffolding_component.svg';
import apiImage from 'images/api_component.svg';
import mediaObj1 from 'images/media-object-1.jpg';
import mediaObj2 from 'images/media-object-2.jpg';
import schemaImage from 'images/schema_component.svg';
import Button from 'components/common/Button';
import styled from 'styled-components';

const Ecosystem = () => (
	<section className="home__part home__ecosystem home__sag" style={{paddingBottom: 0}}>
		<div className="container">
			<div className="header-cta">
				<div className="header-cta-center">
					<a href="http://www.saveagirlsaveaworld.org/uploads/1/3/4/7/13474796/sag_saw_-_scholarship_2017.pdf">
						Apply
					</a>
					&nbsp;for the Kathleen L. M. Wilkes Scholarship for up to $2,500 towards your education.
				</div>
			</div>
			<div className="ecosystem__content grid__container">
				<div className="outer">
					<div className="media-object">
						<div className="card-text-left">
							<span className="deep-purple-text small-text row-heading">Sisterhood</span>
							<CardText className="about-desc">
								We celebrate the spirit of sisterly love by letting our members know that{' '}
								<Strong>they MATTER</Strong>{' '}
							</CardText>
							<SlantedButton>
								<SlantedButtonContent>Learn More about Us</SlantedButtonContent>
							</SlantedButton>
						</div>
						<div className="card-image">
							<img src={mediaObj1} className="image" />
						</div>
					</div>

					<div className="media-object">
						<div className="card-image">
							<img src={mediaObj2} className="image" />
						</div>
						<div className="card-text-right">
							<span className="small-text deep-purple-text uppercase row-heading">Heading</span>
							<CardText className="about-desc">
								<Strong>Our Mentors</Strong> are dynamic creative professionals entreperneus and moral
								leaders committed to challenging the status quo
							</CardText>
							<SlantedButton>
								<SlantedButtonContent>Apply to be a Mentor</SlantedButtonContent>
							</SlantedButton>
						</div>
					</div>
				</div>
			</div>

			<div className="home__partners gray-background">
				<div className="media-object gray-background">
					<div className="grid-wrapper">
						<div className="grid-box a">
							{' '}
							<img src="https://logo.clearbit.com/hyundai.com?size=100" />
						</div>
						<div className="grid-box b">
							{' '}
							<img src="https://logo.clearbit.com/ford.com?size=100" />
						</div>
						<div className="grid-box c">
							{' '}
							<img src="https://logo.clearbit.com/enterprise.com?size=100" />
						</div>
						<div className="grid-box d">
							{' '}
							<img src="https://logo.clearbit.com/honda.com?size=100" />
						</div>
						<div className="grid-box e">
							{' '}
							<img src="https://logo.clearbit.com/uber.com?size=100" />
						</div>
						<div className="grid-box f">
							{' '}
							<img src="https://logo.clearbit.com/vw.com?size=100" />
						</div>
					</div>
					<div className="card-text-right">
						<span className="small-text deep-purple-text uppercase row-heading">Our Partners</span>
						<CardTextPartners className="about-desc">
							WE PARTNER WITH SOME OF THE WORLD'S MOST RECOGNIZED CORPORATIONS COMMITTED TO TACKLING
							Diversity
						</CardTextPartners>
						<SlantedButton>
							<SlantedButtonContent>Join Us</SlantedButtonContent>
						</SlantedButton>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Ecosystem;

const Strong = styled.strong`
	font-family: 'AvantGarde';
`;

const CardText = styled.h2`
	margin-bottom: 40px !important;
	margin-top: 8px !important;
`;

const CardTextPartners = styled.h2`
	margin-bottom: 40px !important;
	margin-top: 8px !important;
	color: #fff;
`;

const SlantedButton = styled.button`
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0px;
	color: #ffffff;
	font-size: 16px;
	background: #7c4dff;
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
