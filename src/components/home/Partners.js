import React, { Component } from 'react';

class Partners extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	render() {
		return (
			<div className="home__partners gray-background">
				<div className="outer">
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
					<div className="media-object gray-background">
						<div className="grid-wrapper">
							<div className="grid-box a">
								{' '}
								<img src="https://logo.clearbit.com/hyundai.com?size=100" />
							</div>
							<div className="grid-box b">
								{' '}
								<img src="https://logo.clearbit.com/ford.com?size=100" />
							</div>
							<div className="grid-box c">
								{' '}
								<img src="https://logo.clearbit.com/enterprise.com?size=100" />
							</div>
							<div className="grid-box d">
								{' '}
								<img src="https://logo.clearbit.com/honda.com?size=100" />
							</div>
							<div className="grid-box e">
								{' '}
								<img src="https://logo.clearbit.com/uber.com?size=100" />
							</div>
							<div className="grid-box f">
								{' '}
								<img src="https://logo.clearbit.com/vw.com?size=100" />
							</div>
						</div>
						<div className="card-text-right">
							<span className="small-text deep-purple-text uppercase row-heading">Heading</span>
							<h2 className="about-desc">
								We celebrate the spirit of sisterly love by letting our members know that{' '}
								<strong>redd MATTER</strong>{' '}
							</h2>
							<SlantedButton>
								<SlantedButtonContent>Give Monthly</SlantedButtonContent>
							</SlantedButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Partners.propTypes = {};

export default Partners;

const SlantedButton = styled.button`
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	border-radius: 0px;
	color: #ffffff;
	font-size: 16px;
	background: #e91e63;
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
