import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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

	renderThumbs = () => (
		<ul>
			{[1, 2, 3, 4, 5].map((item, i) => (
				<li key={i} onClick={() => this.Carousel._onDotClick(i)}>
					Thumb {item}
				</li>
			))}
		</ul>
	);

	render() {
		const responsive = {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1024: {
				items: 3,
			},
		};
		return (
			<section className="home__about_cover">
				<Container>
          <CarouselContainer>
					<AliceCarousel
						duration={400}
						autoPlay={true}
						startIndex={1}
						fadeOutAnimation={true}
						mouseDragEnabled={true}
						playButtonEnabled={true}
						responsive={responsive}
						autoPlayInterval={2000}
						autoPlayDirection="rtl"
						autoPlayActionDisabled={true}
						onSlideChange={this.onSlideChange}
						onSlideChanged={this.onSlideChanged}
					>
						<img src="http://via.placeholder.com/1024x589" />
						<img src="http://via.placeholder.com/1024x589" />
						<img src="http://via.placeholder.com/1024x589" />
					</AliceCarousel>
          </CarouselContainer>

				</Container>
			</section>
		);
	}
}

export default BlogSlider;

const CarouselContainer = styled.div`
    height: 459px;
    width: 100%;
    position: relative;
 
`
// background-position: center center;
//     background-size: cover;
const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-right: 15px;
	padding-left: 15px;
	width: 100%;
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
