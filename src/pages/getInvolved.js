import React from 'react';
import Helmet from 'react-helmet';
import AboutCover from 'components/home/AboutCover';
import AboutEcosystem from 'components/home/AboutEcosystem';

const GetInvolvedPage = () => (
  <div className="home">
    <Helmet title="REST and GraphQL framework on top of Symfony and React" />
    <AboutCover />
    <AboutEcosystem />
  </div>
);

export default GetInvolvedPage;
