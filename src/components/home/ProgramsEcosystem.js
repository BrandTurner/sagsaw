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
import carrot from 'images/carat.png';
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
                  <span><ApplyLink href="https://goo.gl/forms/8EDnH5QGyFTyvnMa2" target="_blank"><Icon type="arrow-right" /> APPLY NOW </ApplyLink></span>
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
                  <span><ApplyLink href="https://goo.gl/forms/8EDnH5QGyFTyvnMa2" target="_blank"><Icon type="arrow-right" /> APPLY NOW</ApplyLink></span>
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
                  <span><ApplyLink href="https://goo.gl/forms/SJTjSbUTQVKzAl4Q2" target="_blank"><Icon type="arrow-right" /> APPLY NOW</ApplyLink></span>
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
          <TabPane tab="Summer Retreat" key="1" >
            <div className="media-object" style={{ marginTop: 0, marginBottom: 0}} >

              <div className="card-text-left">
              <span className = "small-text row-heading" style = {{ color: "#e52d87" }}>Save A Girl, Save A World Summer Retreat</span>
							<PartnersText>
               An annual event that involves an "arms around" environment where targeted participants are triad-paired with professional women for a 3-day summit that
               fosters growth and bonding. Workshops are conducted throughout the weekend covering topics related to the four pillars: wealth building,
               healthy living, career, and goal setting.
							</PartnersText>
                <SlantedButton>
                  <SlantedButtonContent>Summer Retreat Gallery</SlantedButtonContent>
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
              <span className = "small-text row-heading" style = {{ color: "#e52d87" }}>College Ambassador Program</span>
							<PartnersText>
              This program consists of college students who are involved in providing services, programs, and activities that are
              available to help middle and high school students' classroom experience, facilitate their personal and academic growth and address the
              needs of the student.
              							</PartnersText>
                <SlantedButton>
                  <SlantedButtonContent>C-Stem Gallery</SlantedButtonContent>
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
              <span className = "small-text row-heading" style = {{ color: "#e52d87" }}>SAGSAW Webinar Series</span>
							<PartnersText>
               The SAGSAW Webinar Series is a 3-month series of webinars. Each webinar will cover a topic such as: Financial Literacy, Creating Your Brand
               and Political Activism. The one-hour webinars will allow mentees to learn necessary skills within the various topics and
               allow them to interact, ask questions and walk away with assignments that will assist them in applying what they have learned. By taking
               part in the webinars and completing the various assignments, the mentees will also gain eligibility to win prizes at the Annual
               SAGSAW Retreat.
							</PartnersText>
              <SlantedButton>
                  <SlantedButtonContent>Webinar Gallery</SlantedButtonContent>
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

<Row>
              <Col className="gutter-row" span={24}>
                  <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								WHAT ARE THE BENEFITS OF BECOMING A SAVE A GIRL SAVE A WORLD MENTOR?
							</h2>
                <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL >
                    Becoming a SAVE A GIRL, SAVE A WORLD mentor is sure to be a fun and rewarding experience.Studies have shown that mentoring is a highly
                    effective strategy for preventing several key problems that young people face.When you volunteer your time as a Save A Girl, Save The World
                    mentor you become a positive influence during a critical developmental period in a young girl’ s life.It is a time when girls make choices
                    that can change the course of their lives forever.Mentors help girls make positive choices.
                    <br /><br />
                    A major U.S. study found that young people with mentors are:
                    <ul style={{ fontFamily: 'Roboto slab', listStyleType: 'disc', listStylePosition: 'inside' }}>
                      <li style={{ fontFamily: 'Roboto Slab' }}>46% less likely to begin using illegal drugs and 27% less likely to begin using alcohol</li>
                      <li style={{ fontFamily: 'Roboto Slab' }}>52% less likely to skip school and are more confident in their performance in school work</li>
                      <li style={{ fontFamily: 'Roboto Slab' }}>67% more likely to have a healthy relationship with their families</li>
                    </ul>
                    In addition, research confirms that people gain a multitude of skills from volunteering, including enhanced interpersonal skills and improved ability to understand people better, motivate others, and deal with difficult situations.
                  </SnapshotTextL>
                </SnapshotText>
              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								CRITERIA FOR PARTICIPATION
							</h2>
              <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL>
                    SAVE A GIRL, SAVE A WORLD is designed to provide continual education and awareness on the benefits of successful mentoring by connecting
                    and supporting mentoring relationships between three generations of women.SAVE A GIRL, SAVE A WORLD planning committee is focused and eager
                    to support your mentor / mentee relationship throughout the year.
                  </SnapshotTextL>
              </SnapshotText>
              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								PROFESSIONAL MENTOR
							</h2>
              <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL>
                   If you are committed to making a positive difference in a young ladies life and interested in developing new skills that could improve
                   your own life we invite you to join us.Click here to apply.

                  </SnapshotTextL>
                  <SnapshotTextL>
                  <span style={{ textAlign: 'left' }}><ApplyLink href="https://goo.gl/forms/SJTjSbUTQVKzAl4Q2" target="_blank"><Icon type="arrow-right" style={{ textAlign: 'left' }}/> APPLY NOW</ApplyLink></span>
                  </SnapshotTextL>
              </SnapshotText>
              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								COLLEGE MENTOR/MENTEE
							</h2>
              <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL>
                   Since a college mentor will act as a mentor to their high school mentee and as a mentee under their professional mentor they should have adequate time available to connect with both.The goal of the college mentor / mentee is to build a relationship with business professionals and assist the mentees as they prepare
                   for the journey into college life.Click here to apply.
                  </SnapshotTextL>
                  <SnapshotTextL>
                    <span style={{ textAlign: 'left' }}><ApplyLink href="https://goo.gl/forms/8EDnH5QGyFTyvnMa2" target="_blank"><Icon type="arrow-right" style={{ textAlign: 'left' }}/> APPLY NOW</ApplyLink></span>
                  </SnapshotTextL>
              </SnapshotText>
              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								HIGH SCHOOL MENTEE
							</h2>
              <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL>
                   High School Mentees should possess an eagerness and desire to learn and have respect
                   for mentor’ s expertise.

                  </SnapshotTextL>
                  <SnapshotTextL>
                    <span style={{ textAlign: 'left' }}><ApplyLink href="https://goo.gl/forms/8EDnH5QGyFTyvnMa2" target="_blank"><Icon type="arrow-right" style={{ textAlign: 'left' }}/> APPLY NOW</ApplyLink></span>
                  </SnapshotTextL>
              </SnapshotText>

              <h2 className="about-desc" style={{ textAlign: 'left', marginBottom: 20 }}>
								COMMUNICATION
							</h2>
              <SnapshotText style={{ marginBottom: 30 }}>
                  <SnapshotTextL>
                   In any mentorship program communication is key.Each mentor will commit to communicate once a month with their mentees.The
                   following communication is acceptable and suggested: email, social media or telephone, in person, Skype, video conference, etc.
                   The communication should be designed by the mentor / mentees in a way that best serves you.Mentees should always be prepared to
                   actively participate and provide feedback.
                  </SnapshotTextL>
              </SnapshotText>
              </Col>
            </Row>
          </SnapshotContainer>



				</div>
			</div>
		</div>
	</section>
);

export default ProgramsEcosystem;

const Carat = styled.span`
  width: 20px;
  display: block;
  background-image: url(${carrot});
  background-position: left center;
  background-size: 10px;
  background-repeat: no-repeat;
  position: absolute;
  right: -19px;
  height: 100%;
  top: 0;
`

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
      color: #212121;
`;

const SnapshotText = styled.div`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family : 'Avenir';
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
`;

const SnapshotTextL = styled.p `
  font-size: 15px;
  line-height: 22px;
  letter-spacing: .54px;
  font-family: 'Roboto Slab';
  margin-bottom: 15px;
  color: #212121;
  text-align: left !important;
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

