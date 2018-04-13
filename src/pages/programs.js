import React from 'react';
import Helmet from 'react-helmet';
import ProgramsCover from 'components/home/ProgramsCover';
import ProgramsEcosystem from 'components/home/ProgramsEcosystem';

const ProgramsPage = () => (
  <div className="home">
    <Helmet title="REST and GraphQL framework on top of Symfony and React" />
    <ProgramsCover />
    <ProgramsEcosystem />
  </div>
);

export default ProgramsPage;
