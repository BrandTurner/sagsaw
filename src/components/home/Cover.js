import React from 'react';
import spider from 'images/spider_home.svg';
import Flag from 'components/home/Flag';
import Button from 'components/common/Button';
import Logo from 'components/layout/Logo';
import Image from 'images/one.jpg';

const Cover = () => (
  <section className="home__cover full">
    <div className="container cover__content">
      <Logo className="cover__logo" />
      <div className="header-hero">
        <h2>We inspire girls to change their world</h2>
        <p>Save a Girl, Save a World has been forging intergenerational links between girls since 201X.</p>
      </div>

      <div className="cover__buttons">
        <Button
          empty
          text="Download"
          icon="download"
          link="https://github.com/api-platform/api-platform/releases/latest"
        />
        <Button text="Get started" icon="flag" link="/docs/distribution" />
      </div>
    </div>
  </section>
);

export default Cover;
