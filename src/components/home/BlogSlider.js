import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carousel } from 'antd';
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
			<section className="home__about_cover">
				<Container>
          <DisplaySection>IN THE NEWS</DisplaySection>
          <CarouselContainer>
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
          </CarouselContainer>          
				</Container>
			</section>
      <Container>
         <DisplaySection>IN THE NEWS</DisplaySection>

  <div>hi</div>
      </Container>
      </div>
		);
	}
}

export default BlogSlider;

const CarouselContainer = styled.div`
    height: 300px;
    width: 100%;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;

`

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
