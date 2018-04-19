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
import Kathy from 'images/KathyW.png';
import styled from 'styled-components';
import { Col, Row, Tabs, Radio, Card, Icon } from 'antd';
import scholarship_pdf from "../../files/sagsaw_kathy_scholarsip.pdf";

const SchloarshipEcosystem = () => (
	<section className="home__part home__ecosystem home__sag">
		<div className="container">
             <SnapshotContainer>
      <DisplaySection>Kathlee Lynn Marie Wilkes SAGSAW Scholarship</DisplaySection>

        <Row>
              <Col className="gutter-row" span={24}>
              <SnapshotText>
                <SnapshotTextP>
                  Save A Girl, Save A World offers the <Zarya>Kathleen Lynn Marie Wilkes Save A Girl, Save A
                    World Scholorship.</Zarya>
                    The scholarship is awarded to students who participate in the program that achieve academic success
                    and play an active role in their communities. The goal of the proram is to develop leadership potential,
                    encoruage a spirit of social justice and advocate for social change. Award amounts raning from $1000 to $2500 will
                    be given to the winning candidates.
                </SnapshotTextP>
                </SnapshotText>

                <div className="media-object">
						<div className="card-image">
							<img src={Kathy} className="image" />
						</div>
						<div className="card-text-right">
              <span className="small-text deep-purple-text uppercase row-heading">
							  About Kathleen Lynn Marie Wilkes
							</span>
							<SnapshotText>
                <SnapshotTextP>
                  Kathi Wilkes set the standard for seasoned and consummate professionals. Her professional career included
                  being a registered nurse, professor, practicing attorney, a government relations & business consultant,
                  Capitol Hill chief of staff, senior policy advisor and a lobbyist. Kathi was a woman of many triumphs who had a
                  great fondness for young people. She was an adventurous entrepreneur and was equipped to climb the highest mountains
                  and obtain the greatest achievements. Two of her many accomplishments included raising over $16 million
                  for the historic Martin Luther King, Jr. Memorial and working with Congresswoman Sheila Jackson Lee to secure substantial funding
                  for the Sojourner Truth bust, which is placed in the Capitol rotunda.Kathi was a servant, leader and mentor to many staffers on Capitol Hill,
                  where she was an advisor to many Congressional Black Caucus members over the years. She was a dedicated member of the National Coalition on Black
                  Civic Participation - Black Women’ s Roundtable and served as a founding board member for Save a Girl, Save A World mentoring program.
                  She had a“ true” passion for mentorship, politics and was actively involved in community advocacy.
                </SnapshotTextP>
              </SnapshotText>
							<SlantedButton>
								<a href={scholarship_pdf} download>
                  <SlantedButtonContent>Apply here</SlantedButtonContent>
                </a>
							</SlantedButton>
						</div>
					</div>
              </Col>
            </Row>
                     </SnapshotContainer>
		</div>
	</section>
);

export default SchloarshipEcosystem;

// Together, our font-weight is strong
const Zarya = styled.span`
  font-weight: 900;
`

const DisplaySection = styled.section `
	font-family: 'AvantGardeDemi';
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e91e63;
	font-size: 36px;
	padding-top: 50px;
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
  color: #FFFFFF;
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
  line-height: 30px;
  letter-spacing: .54px;
  font-family : 'Roboto Slab';
  margin-bottom: 15px;
    color: #212121;
`;

const SnapshotTextP = styled.p `
  font-size: 18px;
  line-height: 30px;
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

