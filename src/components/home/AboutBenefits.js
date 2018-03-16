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

const AboutEcosystem = () => (
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
          <span className="deep-purple-text small-text row-heading">
						What Are the Benefits of Becoming a Save A Girl, Save A World Mentor?
          </span>
          <p>
						Becoming a SAVE A GIRL, SAVE A WORLD mentor is sure to be a fun and rewarding
						experience. Studies have shown that mentoring is a highly effective strategy for
						preventing several key problems that young people face. When you volunteer your time as
						a Save A Girl, Save The World mentor you become a positive influence during a critical
						developmental period in a young girl’s life. It is a time when girls make choices that
						can change the course of their lives forever. Mentors help girls make positive choices.
          </p>
          <br />
          <p>A major US study found that young people with mentors are:</p>
          <StatsList>
            <li>
							46% less likely to begin using illegal drugs and 27% less likely to begin using
							alcohol
            </li>
            <li>
							52% less likely to skip school and are more confident in their performance in school
							work
            </li>
            <li>67% more likely to have a healthy relationship with their families</li>
          </StatsList>
          <p>
						In addition, research confirms that people gain a multitude of skills from volunteering,
						including enhanced interpersonal skills and improved ability to understand people
						better, motivate others, and deal with difficult situations.
          </p>
          <span className="deep-purple-text small-text row-heading">Criteria for Participation</span>
          <p>
						SAVE A GIRL, SAVE A WORLD is designed to provide continual education and awareness on
						the benefits of successful mentoring by connecting and supporting mentoring
						relationships between three generations of women. SAVE A GIRL, SAVE A WORLD planning
						committee is focused and eager to support your mentor/mentee relationship throughout the
						year.
          </p>
          <span className="deep-purple-text small-text row-heading">Professional Mentor</span>
          <p>
						If you are committed to making a positive difference in a young ladies life and
						interested in developing new skills that could improve your own life we invite you to
						join us. Click here to apply.
          </p>

          <span className="deep-purple-text small-text row-heading">College Mentor/Mentee </span>
          <p>
						Since a college mentor will act as a mentor to their high school mentee and as a mentee
						under their professional mentor they should have adequate time available to connect with
						both. The goal of the college mentor/mentee is to build a relationship with business
						professionals and assist the mentees as they prepare for the journey into college life.
						Click here to apply.
          </p>
          <span className="deep-purple-text small-text row-heading"> High School Mentee</span>
          <p>
						High School Mentees should possess an eagerness and desire to learn and have respect for
						mentor’s expertise. Click here to apply.
          </p>
          <span className="deep-purple-text small-text row-heading">Communication</span>
          <p>
						In any mentorship program communication is key. Each mentor will commit to communicate
						once a month with their mentees. The following communication is acceptable and
						suggested: email, social media or telephone, in person, Skype, video conference, etc.
						The communication should be designed by the mentor/mentees in a way that best serves
						you. Mentees should always be prepared to actively participate and provide feedback
          </p>

        </div>
      </div>
    </div>
  </section>
);

export default AboutEcosystem;

const StatsList = styled.ul`
	list-style-type: circle;
`;

const Paragraph = styled.p`
	box-sizing: border-box;
	color: rgb(113, 107, 112);
	display: block;
	font-family: CaeciliaLTPro-45Light;
	font-size: 15px;
	font-weight: 400;
	height: 90px;
	letter-spacing: 0.45px;
	line-height: 30px;
	margin-bottom: 16px;
	margin-top: 0px;
	text-size-adjust: 100%;
	width: 783.328px;
	-webkit-margin-after: 16px;
	-webkit-margin-before: 0px;
	-webkit-margin-end: 0px;
	-webkit-margin-start: 0px;
	-webkit-tap-highlight-color: rgb(229, 45, 135);
`;
