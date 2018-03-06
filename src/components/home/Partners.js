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
                <strong>they MATTER</strong>{' '}
              </h2>
              <a href="_blank" className="btn-custom primary-custom deep-purple-text avant-text">
								Example<span />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {};

export default Partners;
