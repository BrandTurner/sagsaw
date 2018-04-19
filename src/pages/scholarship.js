import React from 'react';
import Helmet from 'react-helmet';
import ScholarshipCover from '../components/home/ScholarshipCover';
import ScholarshipEcosystem from '../components/home/ScholarshipEcosystem'

const ScholarshipPage = () => (

  <div className="home">
    <Helmet title="REST and GraphQL framework on top of Symfony and React" />
    <ScholarshipCover />
    <ScholarshipEcosystem />

  </div>
);

export default ScholarshipPage;
