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

const EcosystemCard = ({ big, image, link, text, title }) => (
  <div className={classnames('grid__item', { full: big })}>
    <div className={classnames('card ecosystem__card', { big })}>
      <div className="card__circle">
        <img src={image} alt={title} width="646" height="646" />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <article className="card__autosize">
          <h2 className="about-desc">
            {text}
            <strong>THEY MATTER</strong>
          </h2>
        </article>
        <Button text="Read more" className="btn ecosystem__button small" link={link} />
      </div>
    </div>
  </div>
);

EcosystemCard.propTypes = {
  big: PropTypes.bool,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

EcosystemCard.defaultProps = {
  big: false,
};

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
      <div className="ecosystem__content grid__container">
        <div className="outer">
          <div className="media-object">
            <div className="card-text-left">
              <span className="deep-purple-text small-text row-heading">Heading</span>
              <h2 className="about-desc">
								We celebrate the spirit of sisterly love by letting our members know that{' '}
                <strong>they MATTER</strong>{' '}
              </h2>
							Example
            </div>
            <div className="card-image">
              <img src={mediaObj1} className="image" />
            </div>
          </div>

          <div className="media-object">
            <div className="card-image">
              <img src={mediaObj2} className="image" />
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

      <div className="home__partners gray-background">

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
  </section>
);

export default VolunteerEcosystem;
