import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carousel, Row, Col, Icon } from 'antd';
import './BlogSlider.css';

import styled from 'styled-components';

class BlogSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dummy: '',
		};

		this.onSlideChange = this.onSlideChange.bind(this);
		this.onSlideChanged = this.onSlideChanged.bind(this);
	}

	onSlideChange(e) {
		console.log('Item`s position during a change: ', e.item);
		console.log('Slide`s position during a change: ', e.slide);
	}

	onSlideChanged(e) {
		console.log('Item`s position after changes: ', e.item);
		console.log('Slide`s position after changes: ', e.slide);
	}

	render

	render() {
		const responsive = {
			0: {
				items: 1,
			},
			2000: {
				items: 2,
			},
			2400: {
				items: 3,
			},
		};
		return (
      		<div>
				<section className="home__about_cover_blog" >
					<Container>
          				<DisplaySection>IN THE NEWS</DisplaySection>
          				{/* <CarouselContainer>
							<AliceCarousel
								duration={1000}
								autoPlay={true}
								startIndex={1}
								dotsDisabled={true}
								buttonsDisabled={true}
								fadeOutAnimation={true}
								mouseDragEnabled={true}
								playButtonEnabled={true}
								responsive={responsive}
								autoPlayInterval={2000}
								autoPlayDirection="ltr"
								autoPlayActionDisabled={false}
								onSlideChange={this.onSlideChange}
								onSlideChanged={this.onSlideChanged}
							>
								<img src="http://via.placeholder.com/200x200" />
								<img src="http://via.placeholder.com/201x201" />
								<img src="http://via.placeholder.com/202x202" />
							</AliceCarousel>
						</CarouselContainer> */}
					</Container>
				</section>
      			<Container2>

					<Row>
              			<Col className="gutter-row" span={24}>
						  	<Category>
								Press
						 	</Category>
						  	<TitleSection>
								  Glenda Gill continues to spark change as she starts Save a Girl, Save a World
							</TitleSection>
							<Author>
								From <a href="https://rollingout.com/2018/02/11/glenda-gill-starts-save-a-girl-save-the-world-to-help-one-girl-at-at-time/" target="_blank">
								Rolling Out Magazine, Feb. 11th, 2018
								</a>
							</Author>
							<Content>
								Glenda Gill, a former automotive industry leader and proven change agent, has a very impressive and accomplished resume.
								The former executive director of Rainbow PUSH Citizenship Education Fund Global Automotive Project has made vast strides in
								the auto industry including being lead negotiator in brokering the benchmark deal to initiate diversity at Toyota by
								solidifying their 21st Century Diversity Strategy, an incredible 10-year, $7.8B initiative. She has also secured more than
								$1B in deals for 100-plus Black and minority businesses, and has skillfully interfaced worldwide with automotive titans such
								as Ford Motor Company, Chrysler and General Motors for many years. The Detroit native has definitely made her mark in the
								industry and will always be heralded for her significant contributions.
							</Content>
							<ReadMoreLink href="https://rollingout.com/2018/02/11/glenda-gill-starts-save-a-girl-save-the-world-to-help-one-girl-at-at-time/" target="_blank">
								<Icon type="arrow-right" />	READ MORE

							</ReadMoreLink>
						</Col>
					</Row>
				</Container2>
				<Container2>

					<Row>
              			<Col className="gutter-row" span={24}>
						  	<Category>
								Press
						 	</Category>
						  	<TitleSection>
								  Women's History Month: 2018 Will Be Revolutionary!
							</TitleSection>
							<Author>
								From <a href="https://soapboxie.com/social-issues/Womens-History-Month-Will-Be-Revolutionary" target="_blank">
								Soapboxie, March 5th, 2018
								</a>
							</Author>
							<Content>
								A sleeping giant is rising in America and potentially around the globe, and she won’t be denied. Much of the world will be
								 celebrating Women’s History Month in various ways, which is officially designated for the month of March in the United States.
								  The acknowledgement of women’s contributions to society are expected to be extremely consequential moving forward. In many ways,
								   women have already laid down the gauntlet to the disdain of some in all areas of society. Securing justice and equality for women is still a work in progress.
							</Content>
							<ReadMoreLink href="https://soapboxie.com/social-issues/Womens-History-Month-Will-Be-Revolutionary" target="_blank">
								<Icon type="arrow-right" />	READ MORE

							</ReadMoreLink>
						</Col>
					</Row>
				</Container2>
				<Container2>

					<Row>
              			<Col className="gutter-row" span={24}>
						  	<Category>
								Press
						 	</Category>
						  	<TitleSection>
								  COMMUNITY ORGANIZER GLENDA GILL IS SAVING THE WORLD ONE GIRL AT A TIME WITH HER HBCU-BASED NONPROFIT.
							</TitleSection>
							<Author>
								From <a href="https://rollingout.com/2018/02/11/glenda-gill-starts-save-a-girl-save-the-world-to-help-one-girl-at-at-time/" target="_blank">
								Upscale Magazine, April, 2018
								</a>
							</Author>
							<Content>
								GLENDA GILL JUST WANTS TO SAVE THE WORLD. It’s a daunting task, but she’s well on her way to accomplishing her goal through her
								 organization Save a Girl, Save a World (SAGSAW). “I am very grateful that I have been blessed with the opportunity with our team 
								 to serve and inspire a generation of young girls and women in unlocking their greatness through multigenerational empowerment,” 
								 says Gill. “My passion is to serve, share, teach and learn with a share-it-forward attitude and commitment, which will result in 
								 creating lasting legacies for young women who will be our dynamic leaders of tomorrow.
							</Content>
							<ReadMoreLink href="https://rollingout.com/2018/02/11/glenda-gill-starts-save-a-girl-save-the-world-to-help-one-girl-at-at-time/" target="_blank">
								<Icon type="arrow-right" />	READ MORE

							</ReadMoreLink>
						</Col>
					</Row>
				</Container2>
			</div>
		);
	}
}

export default BlogSlider;

const ReadMoreLink = styled.a`
  color: #e52d87;
  border-bottom: 1px solid #e52d87;
  cursor: pointer;
  font-family: 'AvantGardeLight', Helvetica, Arial, sans-serif;
  font-size: 16px;
  letter-spacing: 1px;

`;

const Content = styled.div`
	color: #212121;
	font-family: 'Roboto Slab', Helvetica, Arial;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 40px;
`

const Author = styled.p`
	font-family: 'Roboto Slab', Helvetica, Arial;
	font-size: 15px;
	letter-spacing: .54px;
	color: #212121;
	margin-top: 0px;
	margin-bottom: 16px;
`

const TitleSection = styled.p`
	font-size: 32px;
	font-family: 'AvantGardeDemi';
	color: rgb(87,87,87);
	letter-spacing: 0.96px;
	line-height: 32px;
	padding-top: 5px;
	padding-bottom: 5px;
	text-transform: uppercase;
	margin-bottom: 0px
`

const CarouselContainer = styled.div`
    height: 300px;
    width: 100%;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;
`;

const Category = styled.p`
	font-family: 'AvantGarde';
	font-size: 14px;
	text-transform: uppercase;
	color: #E91E63;
	letter-spacing: 1px;
	padding-top: 10px;
`;

const DisplaySection = styled.section `
	font-family: 'AvantGardeDemi';
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #e91e63;
	font-size: 48px;
  padding-top: 50px;
  text-align: left;
`;

const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
  width: 100%;
  max-width: 1220px;  
`;

const Container2 = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
  width: 100%;
  max-width: 1220px;
  background-color: rgb(242, 242, 242);
  margin-bottom: 30px;
  padding-bottom: 15px;
`;

const ContainerContent = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	width: 100%;
	max-width: 1220px;
	background-color: rgb(242, 242, 242);
	position: relative;
	top: -62px;
`;

const BlogHeader = styled.h1`
	color: #575757;
	font-size: 32px;
	margin: 0;
	padding: 20px 0;
	letter-spacing: 0.5px;
	line-height: 1em;
	font-family: AvantGardeGothicITCW01XLt;
	text-transform: uppercase;
	font-weight: 500;
`;
