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
import { Col, Row, Tabs, Radio, Card, Icon } from 'antd';
import { Image } from 'semantic-ui-react';
const BrookeAvatar = "/bio/brooke_square.png";
const AishaAvatar = "/bio/aisha_square.png";


const Mission = () => (
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
         <SnapshotContainer>
           <DisplaySection>VISION, MISSION AND VALUES</DisplaySection>
            <Row>
              <Col className="gutter-row" span={24}>

              <SnapshotText>
                <SnapshotTextP>
                  	We aim to be conduits of change for young women by focusing on four pillars, wealth,
								life skills, careers and health & wellness, our mission is to provide education and
								awareness by sharing successful life experiences through mentoring that brings together
								several generations of young girls and women whose life experiences transcend time.
								Through these mentor relationships we ensure that young girls are equipped with a
								healthy self-image to contribute to social importance and personal development.
                </SnapshotTextP>
                <SnapshotTextP>
                  Save a Girl, Save a World (SAGSAW) is a multi-generational mentoring and esteem building program with an annual
                  retreat held at HBCU's each Fall for the purposes of assisting young girls and young women with a continued pipeline of support through mentorship.
                  SAGSAW has assembled  a network of some of the brightest and most accomplished women from coast to coast to work as mentors.
                  The program aims to help mentees in gaining focus and addressing real life situations. Our organization stands on four pillars
                  <Row  style={{marginTop: 15}}>
              <Col className="gutter-row" span={6}>
                <PillarsTitle>Financial Education</PillarsTitle>
                 <p style={{ fontFamily: 'Roboto Slab', fontSize: 15, letterSpacing: 0.54 }}>We build the financial acumen of young women to prepare them to successfully manage their finances to create a legacy for themselves and their
                 families.</p>
              </Col>
               <Col className="gutter-row" span={6}>
                <PillarsTitle>Life Skills</PillarsTitle>
                 <p style={{ fontFamily: 'Roboto Slab', fontSize: 15, letterSpacing: 0.54 }}>We provide learning opportunities to install a firm foundation through
                 which growth can occur
                 </p>
              </Col>
              <Col className="gutter-row" span={6}>
                <PillarsTitle>Career Development</PillarsTitle>
                 <p style={{ fontFamily: 'Roboto Slab', fontSize: 15, letterSpacing: 0.54 }}>We introduce mentor shaping experiences to encourage young women
                 to pursue their dreams</p>
              </Col>
              <Col className="gutter-row" span={6}>
                <PillarsTitle>Health and Wellnes</PillarsTitle>
                 <p style={{ fontFamily: 'Roboto Slab', fontSize: 15, letterSpacing: 0.54 }}>We encourage a strong body, mind, and spirit to build self-esteem
                 and confidence.</p>
              </Col>
            </Row>

                  </SnapshotTextP>
                </SnapshotText>
              </Col>
            </Row>

              </SnapshotContainer>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;

const StatsList = styled.ul`
	list-style-type: circle;
`;

const DisplaySection = styled.section `
	font-family: 'AvantGardeDemi';
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #e91e63;
	font-size: 48px;
  padding-top: 50px;
  margin-bottom: 30px;
  text-align: left;
`;

const PillarsTitle = styled.h2`
  font-family: 'AvantGardeDemi';
  color: #e91e63;
  font-size: 25px;
  text-transform: uppercase;
`

const Paragraph = styled.p`
	box-sizing: border-box;
	color: rgb(113, 107, 112);
	display: block;
	font-family: CaeciliaLTPro-45Light;
	font-size: 15px;
	font-weight: 400;
	height: 90px;
	letter-spacing: 0.45px;
	line-height: 30px;
	margin-bottom: 16px;
	margin-top: 0px;
	text-size-adjust: 100%;
	width: 783.328px;
	-webkit-margin-after: 16px;
	-webkit-margin-before: 0px;
	-webkit-margin-end: 0px;
	-webkit-margin-start: 0px;
	-webkit-tap-highlight-color: rgb(229, 45, 135);
`;

const Pillars = styled.ul`
  font-family: 'Roboto Slab';


  margin-top: 15px;
`;

const List = styled.li`
  font-family: 'Roboto Slab' !important;
`

const ApplyLink = styled.a `
  color: #e52d87;
  border-bottom: 1px solid #e52d87;
  ApplyLinkcursor: pointer;
  font-family: 'AvantGardeLight', Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

const GutterBox = styled.div `
  background: transparent;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  text-align: left;

`;

const SnapshotHeading = styled.p `
text-transform: uppercase;
    font-family: 'AvantGardeDemi';
    line-height: 130%;
    font-size: 15px;
    margin-bottom: 16px;
    color: #212121;
`;

const SnapshotText = styled.div `
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family : 'Roboto Slab';
  margin-bottom: 15px;
    color: #212121;
`;

const SnapshotTextP = styled.p `
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family: 'Roboto Slab';
  margin-bottom: 15px;
  color: #212121;
  text-align: left;

`;


const SnapshotContainer = styled.div `
  max-width: 1220px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
`;

const SlantedButton = styled.button `
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

const SlantedButtonContent = styled.span `
	-ms-transform: skewX(-20deg);
	-webkit-transform: skewX(-20deg);
	transform: skewX(-20deg);
	display: inline-block;
	vertical-align: middle;
	font-family: 'AvantGarde';
	font-weight: 900;
	text-transform: uppercase;
`;

const Spaniard = styled.span `
font-family: 'AvantGardeLight', sans-serif !important;
font-weight: 900;
`;

const PartnersText = styled.p `
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family: 'Roboto Slab', serif;
  margin-bottom: 15px;
`;

