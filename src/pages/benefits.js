import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AboutBenefits from '../components/home/AboutBenefits';

const SupportCard = ({ children, title }) => (
  <div className="support-card">
    <h3>{title}</h3>
    <div className="support-card__content">{children}</div>
  </div>
);

SupportCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SupportCard.defaultProps = {
  children: null,
};

const BenefitsPage = () => (
  <div className="support">
    <Helmet title="Support" />

    <AboutBenefits />
  </div>
);

export default BenefitsPage;

const StatsList = styled.ul`
	list-style-type: circle;
`;

const Paragraph = styled.p`
  box-sizing:
border-box
;
color:
rgb(113, 107, 112)
;
display:
block
;
font-family:
CaeciliaLTPro-45Light
;
font-size:
15px
;
font-weight:
400
;
height:
90px
;
letter-spacing:
0.45px
;
line-height:
30px
;
margin-bottom:
16px
;
margin-top:
0px
;
text-size-adjust:
100%
;
width:
783.328px
;
-webkit-margin-after:
16px
;
-webkit-margin-before:
0px
;
-webkit-margin-end:
0px
;
-webkit-margin-start:
0px
;
-webkit-tap-highlight-color:
rgb(229, 45, 135);
`;
