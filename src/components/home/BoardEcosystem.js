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
import gg from 'images/gg_headshot.jpg';
import styled from 'styled-components';

const EcosystemCard = ({ big, image, link, text, title }) => (
	<div className={classnames('grid__item', { full: big })}>
		<div className={classnames('card ecosystem__card', { big })}>
			<div className="card__circle">
				<img src={image} alt={title} width="646" height="646" />
			</div>
			<div className="card__content">
				<h3>{title}</h3>
				<article className="card__autosize">
					<h2 className="about-desc">
						{text}
						<strong>THEY MATTER</strong>
					</h2>
				</article>
				<Button text="Read more" className="btn ecosystem__button small" link={link} />
			</div>
		</div>
	</div>
);

EcosystemCard.propTypes = {
	big: PropTypes.bool,
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

EcosystemCard.defaultProps = {
	big: false,
};

const BoardEcosystem = () => (
	<section className="home__part home__ecosystem home__sag">
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
							<span className="deep-purple-text small-text row-heading">Our Vision</span>
							<p>
								We aim to be conduits of change for young women by focusing on four pillars, wealth,
								life skills, careers and health & wellness, our mission is to provide education and
								awareness by sharing successful life experiences through mentoring that brings together
								several generations of young girls and women whose life experiences transcend time.
								Through these mentor relationships we ensure that young girls are equipped with a
								healthy self-image to contribute to social importance and personal development.
							</p>
						</div>
						<div className="card-image">
							<h2 className="about-desc">
								SAVE A GIRL, SAVE A WORLD BELIEVES IN CELEBRATING THE SPIRIT OF SISTERLY LOVE BY LETTING
								OUR MEMBERS KNOW THAT THEY MATTER
							</h2>
						</div>
					</div>

					<div className="media-object">
						<div className="card-image">
							<img src={gg} className="image" />
						</div>
						<div className="card-text-right">
							<span className="small-text deep-purple-text uppercase row-heading">
								A Letter from Glenda Gill, Our Founder
							</span>
							<p>
								We wanted to show young women what a productive, fulfilling, spiritual life with joy
								looks like. We want girls to really know that they are our legacy and next generation of
								leaders; that we care about them and how they show up, represent and appear in the
								world. We want to be their village and support system to navigate life's challenges and
								to share a roadmap based on our various real-life experiences. We want to do what we can
								to help young girls along their journey in life. Together, we assembled our professional
								resources along with our network of some of the brightest and most accomplished women
								from coast to coast to work with us as mentors; holding the idea of developing
								sisterhood with a younger generation to share knowledge and experiences would prove
								invaluable. It’s important that throughout our program, we really drive home the point -
								as mentors, we are there for the girls. If they need guidance, we are there whether it
								is for the year, or for a lifetime. We want to give these girls things that we wished we
								had. Our goal is to bring out the greatness in them and to let them know that we have
								their backs. …And that’s how Save A Girl, Save A World was born.
							</p>
							<SlantedButton>
								<SlantedButtonContent>Join Us</SlantedButtonContent>
							</SlantedButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default BoardEcosystem;

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
