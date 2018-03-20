import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import adminImage from 'images/admin_component.svg';
import scaffoldingImage from 'images/scaffolding_component.svg';
import apiImage from 'images/api_component.svg';
import mediaObj1 from 'images/media-object-1.jpg';
import mediaObj2 from 'images/media-object-2.jpg';
import schemaImage from 'images/schema_component.svg';
import styled from 'styled-components';
import { Button, Icon, Tab, Image } from 'semantic-ui-react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const TabPane = Tabs.TabPane;

const VolunteerEcosystem = () => (
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
      <section className="ecosystem__content grid__container" id="volunteer">
        <div className="outer">
          <Row>
            <Volunteer>
              <SectionTitle>Volunteer</SectionTitle>
              <Bar />
              <Description>
								Mentors form the bedrock of Save a Girl Save a World They are 18+ and can be
								educators, entrepreneurs, marketers, computer scientists, librarians, parents,
								college students or volunteers from any background or field. We are recruiting
								professional women to be paired with both a college and high school mentee. Our
								Mentors guide girls through the curriculum, helping them to build sisterhood within
								the Club, giving them the tools to navigate through life's obstacles while focusing
								on health, lifestyle, wealth and career challenges.
              </Description>
              <ButtonGroup>
                <Button color="violet" size="massive">
									Apply for Mentorship <Icon color="white" name="long arrow right" />
                </Button>
              </ButtonGroup>
            </Volunteer>
          </Row>

          <Tabs
            defaultActiveKey="1"
            style={{ marginBottom: 100 }}
            tabBarStyle={{ backgroundColor: 'indigo', color: 'white' }}
          >
            <TabPane tab="WHAT WE'RE LOOKING FOR" key="1">
              <CenterFlex>
                <PaneText>
									You are:
									<LookingForList>
  <li> 18+</li>
  <li> Available 3-4 hours per week, including travel & prep time </li>
  <li>
											Comfortable learning alongside Club girls as they explore the foundational
											computer science concepts of variables, loops, conditionals and functions. Our
											curriculum is designed so that anyone can facilitate a Club; no computer
											science experience is needed! In fact, many Facilitators have NO technical
											background. Here’s how Girls Who Code supports Facilitators!
  </li>
  <li>
    {' '}
											Passionate about Girls Who Code’s mission to close the gender gap in
											technology and have the ability to foster community within your Girls Who Code
											Club.
  </li>
									</LookingForList>
                  <ApplyLink style={{ width: 'auto', textAlign: 'left' }}>
                    <Linker href="https://google.com">Apply Today!</Linker>
                  </ApplyLink>
                </PaneText>
              </CenterFlex>
            </TabPane>
            <TabPane tab="WHAT MENTORING ENTAILS" key="2">
              <CenterFlex>
                <PaneText>
									You are:
									<LookingForList>
  <li> 18+</li>
  <li> Available 3-4 hours per week, including travel & prep time </li>
  <li>
											Comfortable learning alongside Club girls as they explore the foundational
											computer science concepts of variables, loops, conditionals and functions. Our
											curriculum is designed so that anyone can facilitate a Club; no computer
											science experience is needed! In fact, many Facilitators have NO technical
											background. Here’s how Girls Who Code supports Facilitators!
  </li>
  <li>
    {' '}
											Passionate about Girls Who Code’s mission to close the gender gap in
											technology and have the ability to foster community within your Girls Who Code
											Club.
  </li>
									</LookingForList>
                  <ApplyLink style={{ width: 'auto', textAlign: 'left' }}>
                    <Linker href="https://google.com">Apply Today!</Linker>
                  </ApplyLink>
                </PaneText>
              </CenterFlex>
            </TabPane>
            <TabPane tab="WHAT YOUR COMMITMENT WILL BE" key="3">
              <CenterFlex>
                <PaneText>
									You are:
									<LookingForList>
  <li> 18+</li>
  <li> Available 3-4 hours per week, including travel & prep time </li>
  <li>
											Comfortable learning alongside Club girls as they explore the foundational
											computer science concepts of variables, loops, conditionals and functions. Our
											curriculum is designed so that anyone can facilitate a Club; no computer
											science experience is needed! In fact, many Facilitators have NO technical
											background. Here’s how Girls Who Code supports Facilitators!
  </li>
  <li>
    {' '}
											Passionate about Girls Who Code’s mission to close the gender gap in
											technology and have the ability to foster community within your Girls Who Code
											Club.
  </li>
									</LookingForList>
                  <ApplyLink style={{ width: 'auto', textAlign: 'left' }}>
                    <Linker href="https://google.com">Apply Today!</Linker>
                  </ApplyLink>
                </PaneText>
              </CenterFlex>
            </TabPane>
          </Tabs>
          <Testimonial>
            <VolunteerTwo>
              <Image src={mediaObj1} size="small" circular />
              <SectionTitle>Volunteer</SectionTitle>
              <Bar />
              <DescriptionTwo>
								Mentors form the bedrock of Save a Girl Save a World They are 18+ and can be
								educators, entrepreneurs, marketers, computer scientists, librarians, parents,
								college students or volunteers from any background or field. We are recruiting
								professional women to be paired with both a college and high school mentee. Our
								Mentors guide girls through the curriculum, helping them to build sisterhood within
								the Club, giving them the tools to navigate through life's obstacles while focusing
								on health, lifestyle, wealth and career challenges.
              </DescriptionTwo>
              <ButtonGroup>
                <Button color="violet" size="massive">
									Apply for Mentorship <Icon color="white" name="long arrow right" />
                </Button>
              </ButtonGroup>
            </VolunteerTwo>
          </Testimonial>
        </div>
      </section>
    </div>
  </section>
);

export default VolunteerEcosystem;

const Testimonial = styled.div`
  position: relative;
  	display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
  width: 100%;

	&:before {
		content: '';
		position: absolute;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		outline: 1px solid transparent;
		top: -0.3125rem;
		right: -1.875rem;
		bottom: -0.3125rem;
		left: -1.875rem;
		-webkit-transform: rotateZ(2deg);
		-ms-transform: rotate(2deg);
		transform: rotateZ(2deg);
		background: #ece816;
		z-index: 1;
	}

	&:after {
		content: '';
		position: absolute;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		outline: 1px solid transparent;
		top: 0;
		right: -1.875rem;
		bottom: 0;
		left: -1.875rem;
		-webkit-transform: rotateZ(-2deg);
		-ms-transform: rotate(-2deg);
		transform: rotateZ(-2deg);
		background: #6acdb1;
		z-index: 2;
	}
`;

const ApplyLink = styled.p`
	color: ##f8bbd0;
	text-decoration: none;
	cursor: pointer;
	width: auto;
	font-family: 'Avenir', Arial, sans-serif;
	font-size: 20px;
	font-weight: 200;
`;

const Linker = styled.a`
	color: ##f8bbd0;
	text-decoration: none;
	cursor: pointer;
	width: auto;
	font-family: 'Avenir', Arial, sans-serif;
	font-size: 20px;
	font-weight: 200;
	color: magenta;
	text-decoration: underline;
	text-decoration-color: #6acdb1;
`;

const CenterFlex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PaneText = styled.div`
	width: 800px;
	text-align: left;
	font-family: 'Avenir', Arial, sans-serif;
	font-size: 20px;
	font-weight: 200;
	color: indigo;
	text-align: left;
	margin-bottom: 15px;
`;

const LookingForList = styled.ul`
	list-style-type: disc;
	list-style-position: inside;
	margin-top: 10px;
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
`;
const Volunteer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 99;
`;

const VolunteerTwo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  z-index: 99;
  max-width: 780px;
`;

const TestimonialContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Description = styled.p`
	font-family: 'Avenir', Arial, sans-serif;
	font-size: 20px;
	font-weight: 200;
	color: indigo;
	text-align: center;
	margin-bottom: 15px;
`;

const DescriptionTwo = styled.p`
	font-family: 'Avenir', Arial, sans-serif;
	font-size: 20px;
	font-weight: 200;
	color: indigo;
	text-align: center;
  margin-bottom: 15px;
  z-index: 99;
`;

const Row = styled.div`
	max-width: 900px;
	margin-bottom: 20px;
`;

const SectionTitle = styled.h1`
	margin-bottom: 15px;
	font-family: 'Avenir', Arial, sans-serif;
`;

const Bar = styled.div`
	width: 275px;
	height: 6px;
	background: magenta;
	margin-bottom: 20px;
`;
