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
import { Icon } from 'antd';

const BrookeAvatar = "/bio/brooke_square.png";
const AishaAvatar = "/bio/aisha_square.png";

import wom from 'images/worldofmoney.png';



import { Col, Row, Tabs, Radio, Card } from 'antd';
const TabPane = Tabs.TabPane;


import { Image } from 'semantic-ui-react';

const ProgramsEcosystem = () => (
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

        <div className="media-object" style={{ marginBottom: 150 }}>
        	<div className="card-image">
							<h2 className="about-desc">
								<Spaniard> WE 'RE EQUIPPING EXTRAORDINARY LEADERS </Spaniard>WITH THE CAPACITY TO POSITIVELY TRANSFORM SOCIETY

							</h2>
						</div>
						<div className="card-text-right">

							<PartnersText>
                Our partners are changemakers.They put their money where their mouths are and they’ re not afraid of taking
                risks to create outsized impact.They share our belief that every individual, not just some, deserve the right
                to live with dignity, not dependence.Our partners are the individuals, corporations and institutions who
                provide the financial and human capital that allow us to take on the world’ s toughest challenges.
							</PartnersText>
						</div>

					</div>

          <SnapshotContainer>
            <Row>
              <Col className="gutter-row" span={24}>
                  <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 45 }}>
								<Spaniard> OUR PROGRAM </Spaniard>CONSISTS OF 105 EXTRAORDINARY WOMEN

							</h2>
              </Col>
            </Row>
            <Row gutter={16} style={{ marginBottom: 150 }}>
              <Col className="gutter-row" span={8}>
                <GutterBox>
                  <Image src={AishaAvatar} size='small' style={{ marginBottom: 30 }} circular/>
                  <SnapshotHeading>35 HIGH SCHOOL FEMALES</SnapshotHeading>
                  <SnapshotText><SnapshotTextP>Our high school mentees are girls who are committed and confident. They have a positive outlook and look to a future that holds
                    great possibilities for themselves, their family, and the world. They are inspired and inspiring. Dictumst mi ullamcorper iaculis potenti consectetur congue suspendisse imperdiet vestibulum condimentum fusce curabitur a fringilla ullamcorper a nisl.Elementum vehicula suspendisse vestibulum imperdiet proin nostra facilisi sed sed est non ullamcorper eu proin tincidunt condimentum donec urna non sem mauris.Proin.</SnapshotTextP></SnapshotText>
                  <span><ApplyLink><Icon type="arrow-right" /> APPLY NOW </ApplyLink></span>
                </GutterBox>
              </Col>
              <Col className="gutter-row" span={8}>
                <GutterBox>
                  <Image src={AishaAvatar} size='small' style={{ marginBottom: 30 }} circular/>
                  <SnapshotHeading>35 UNIVERSITY STUDENTS</SnapshotHeading>
                  <SnapshotText><SnapshotTextP>Our university students are drawn from HBCU colleges and universities across the United
                    States. Serving as both mentor and mentee, they gain invaluable knowledge and experience from our professional mentors while
                    also guiding their mentees by promoting high self-esteem, supporting their academic achievements and encourage  positive life choices.
Dictumst mi ullamcorper iaculis potenti consectetur congue suspendisse imperdiet vestibulum condimentum fusce curabitur a fringilla ullamcorper a nisl.Elementum vehicula suspendisse vestibulum imperdiet
                   </SnapshotTextP></SnapshotText>
                  <span><ApplyLink><Icon type="arrow-right" /> APPLY NOW</ApplyLink></span>
                </GutterBox>
              </Col>
              <Col className="gutter-row" span={8}>
                <GutterBox>
                  <Image src={AishaAvatar} size='small' style={{ marginBottom: 30 }} circular/>
                  <SnapshotHeading>35 PROFESSIONAL LEADERS</SnapshotHeading>
< SnapshotText > <SnapshotTextP>Our mentors are professional women committed to the well-being of
  college and high school young women at risk that will benefit significantly from
  a mentor-mentee relationship. They act as role models, dedicated to challenging, guiding and being a
  cheerleader to the mentee. By sharing fun activities and exposing
  mentees to new experiences, a mentor encourages positive choices, promotes high
  self-esteem, supports academic achievement, and introduces her mentee to new
  bright ideas.
</SnapshotTextP> </SnapshotText>
                  <span><ApplyLink><Icon type="arrow-right" /> APPLY NOW</ApplyLink></span>
                </GutterBox>
              </Col>
            </Row>

  <Row>
              <Col className="gutter-row" span={24}>

              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 45 }}>
								<Spaniard> OUR SIGNATURE </Spaniard>PROGRAMS

							</h2>
          <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          style={{ minHeight: 500 }}
        >
          <TabPane tab="Summer Retreat" key="1">
            <div className="media-object" style={{ marginTop: 0, marginBottom: 0}} >

              <div className="card-text-left">
              <span className="deep-purple-text small-text row-heading">Save A Girl, Save A World Summer Retreat</span>
							<PartnersText>
               An annual event that involves an "arms around" environment where targeted participants are triad-paired with professional women for a 3-day summit that
               fosters growth and bonding. Workshops are conducted throughout the weekend covering topics related to the four pillars: wealth building,
               healthy living, career, and goal setting.
							</PartnersText>
                <SlantedButton>
                  <SlantedButtonContent>Go to WorldofMoney.com</SlantedButtonContent>
                </SlantedButton>
              </div>
              <div className="card-image">
               <img src={wom} className="image" />
              </div>
            </div>
          </TabPane>
          <TabPane tab="College Ambassador Program" key="2">

            <div className="media-object" style={{ marginTop: 0, marginBottom: 0}}>
              <div className="card-text-left">
              <span className="deep-purple-text small-text row-heading">College Ambassador Program</span>
							<PartnersText>
               Our mutual goal is to provide the tools that empower students to become innovators and technologically-proficient problem solvers. Through
               mentoring, coaching and training, we want to introduce young women to the vast array of educational and career opportunities in STEM fields.
               Founded in 2002 by Dr. REagan Flowers, C-Stem Teacher & Student Support Services is designed to close the achievement gap by helping students learn
               and experience communication, science, technology, engineeering, and mathematics through innovation that exposes these concepts through a myriad of
               disciplines. These include robotics, geoscience, 3D printing, film-making, photography, sculpture, mural painting, creative writing and photography
							</PartnersText>
                <SlantedButton>
                  <SlantedButtonContent>Go to C-Stem's Site</SlantedButtonContent>
                </SlantedButton>
              </div>
              <div className="card-image">
                {/* <Carousel autoPlay showArrows={false} infiniteLoop showThumbs={false}>
                <div>
                    <img src={cstem} className="image" style={{ height: 250, objectFit: 'contain' }}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={wom} className="image" style={{ height: 250, objectFit: 'contain' }}/>
                    <p className="legend">Legend 2</p>
                </div>

            </Carousel> */}
                <img src='http://lorempixel.com/150/150' className="image" />



              </div>
            </div>


          </TabPane>
          <TabPane tab="Webinar Series" key="3">
            <div className="media-object" style={{ marginTop: 0, marginBottom: 0}}>

              <div className="card-text-left">
              <span className="deep-purple-text small-text row-heading">SAGSAW Webinar Series</span>
							<PartnersText>
               World of Money allows Save A Girl Save A World to provide students with financial literacy education via on-site
               learning, webinars and other content. A unique centerpiece of the program is the World of Money app. Our mutual goal is
               to make students masters of basic money management. Founded in 2005 by Sabrina Lamb, WoM features a curriculum that includes
               basic financial tools for youth, how to budget, save and invest, how to use financial technology, innovative thinking, how
               our government works; and foreign language, culture, and travel. The content also encompasses managing loans, paying for college,
               understanding budgets, credit cards, 401(k)s, payroll taxes and investments. More than 4000 parents and their children have successfully
               completed the WoM program.
							</PartnersText>
                <SlantedButton>
                  <SlantedButtonContent>Go to WorldofMoney.com</SlantedButtonContent>
                </SlantedButton>
              </div>
              <div className="card-image">
               <img src={wom} className="image" />
              </div>
            </div>
          </TabPane>

        </Tabs>
</Col>
</Row>
          </SnapshotContainer>



				</div>
			</div>
		</div>
	</section>
);

export default ProgramsEcosystem;





const ApplyLink = styled.a`
  color: #e52d87;
  border-bottom: 1px solid #e52d87;
  ApplyLinkcursor: pointer;
  font-family: 'AvantGardeLight', Helvetica, Arial, sans-serif;
  font-size: 16px;
`

const GutterBox = styled.div`
  background: transparent;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  text-align: left;

`;

const SnapshotHeading = styled.p`
text-transform: uppercase;
    font-family: 'AvantGardeDemi';
    line-height: 130%;
    font-size: 15px;
    margin-bottom: 16px;
      color: #212121
`;

const SnapshotText = styled.div`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family : 'Avenir';
  margin-bottom: 15px;
    color: #212121
`;

const SnapshotTextP = styled.p `
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family: 'Avenir';
  margin-bottom: 15px;
  color: #212121
`;


const SnapshotContainer = styled.div`
  max-width: 1220px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
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

