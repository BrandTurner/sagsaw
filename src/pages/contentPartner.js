import React from 'react';
import Helmet from 'react-helmet';
import ContentPartnerHero from 'components/home/ContentPartnerHero';
import ContentPartnerContent from 'components/home/ContentPartnerContent';

const ContentPartnerPage = () => (
  <div className="home">
    <Helmet title="REST and GraphQL framework on top of Symfony and React" />
    <ContentPartnerHero / >
    <ContentPartnerContent />
  </div>
);

export default ContentPartnerPage;

