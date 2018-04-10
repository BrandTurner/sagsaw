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

import {
  Card,
  Col,
  Row
} from 'antd';


import wom from 'images/worldofmoney.png';
import cstem from 'images/c_stem.jpg'

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

const ContentPartnerContent = () => (
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
							<span className="deep-purple-text small-text row-heading">Partnering With Save a Girl Save a World</span>
							<PartnersText>
                Our partners are changemakers.They put their money where their mouths are and they’ re not afraid of taking
                risks to create outsized impact.They share our belief that every individual, not just some, deserve the right
                to live with dignity, not dependence.Our partners are the individuals, corporations and institutions who
                provide the financial and human capital that allow us to take on the world’ s toughest challenges.
							</PartnersText>
						</div>
						<div className="card-image">
							<h2 className="about-desc">
								<Spaniard>WITH DETERMINATION AND GRIT, </Spaniard>EVERYONE CAN CONTRIBUTE TO A BETTER FUTURE
							</h2>
						</div>
					</div>

         <div className="media-object">
           <div className="card-image">
							<h2 className="about-desc">
								< Spaniard > PARTNER WITH US. </Spaniard>TOGETHER, WE CAN BUILD A MORE INCLUSIVE WORLD,
							</h2>
						</div>
						<div className="card-text-right">
							<span className="deep-purple-text small-text row-heading">Let's Work Together</span>
							<PartnersText>
                Our organization relies on support from partners to drive our work.Based on thoughtful conversation
                with your organization, we’ ll develop a customized partnership to direct your donation to
                initiatives and programs within Save A Girl Save A World. If you make a commitment to generally
                support us, your funding will go toward our overall operation and management of our programs
                across the country.
							</PartnersText>
						</div>
					</div>
        <div><ContentPartnersTitle>Content Partners</ContentPartnersTitle></div>
        <ContentPartners>
         <div style={{ background: 'white', padding: '30px' }}>
    <Row gutter={16} style={{ backgroundColor: 'white' }}>
      <Col span={12}>
        <Card
          cover={<img alt="World of Money" src={wom}   style={{ maxHeight: '250px', objectFit: 'contain', margin: '0 auto' }} />}
          bordered={false}>
          World of Money
        </Card>
      </Col>
      <Col span={12}>
        <Card
          cover={<img alt="World of Money" src={cstem} style={{ maxHeight: '250px', objectFit: 'contain', margin: '0 auto' }} />}

          bordered={false}>
          C-Stem
        </Card>
      </Col>

    </Row>
  </div>
        </ContentPartners>

				</div>
			</div>
		</div>
	</section>
);

export default ContentPartnerContent;

const ContentPartnersTitle = styled.h3`
  color: #212121;
  font-family: 'Avenir';
  font-weight: 700;
  margin: 0 auto !important;
  margin-bottom: .5rem;
  line-height: 1.4;
  font-size: 31px;
  float: left;
  border-bottom: 5px solid #7C4DFF;

`

const ContentPartners = styled.div`
  width: 1000px;
  height: 400px;
`;


const Spaniard = styled.span`
font-family: 'AvantGardeLight', sans-serif !important;
font-weight: 900;
`;

const PartnersText = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 15px;
`;

const CardText = styled.h2 `
	margin-bottom: 40px !important;
	margin-top: 8px !important;
`;

const Strong = styled.strong `
	font-family: 'AvantGarde';
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
