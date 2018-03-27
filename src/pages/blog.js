import React from 'react';
import Helmet from 'react-helmet';
import AboutCover from 'components/home/AboutCover';
import VolunteerEcosystem from 'components/home/VolunteerEcosystem';
import AllInOne from 'components/home/AllInOne';
import Giants from 'components/home/Giants';
import Expose from 'components/home/Expose';
import Schema from 'components/home/Schema';
import References from 'components/home/References';
import BlogSlider from 'components/home/BlogSlider';

import Seo from 'components/home/Seo';

const BlogPage = () => (
	<div className="home">
		<Helmet title="REST and GraphQL framework on top of Symfony and React" />
		<BlogSlider />
	</div>
);

export default BlogPage;
