import React from 'react';
import { openSourceData, otherData } from 'data/logos';

const openSourceList = openSourceData.map(({ name, logo, link }) => (
  <a key={name} href={link} target="_blank" className="references__item big">
    <img src={`/references/${logo}.png`} alt={name} width="300" height="300" />
    <p className="logo__title">{name}</p>
  </a>
));

const otherList = otherData.map(({ name, logo }) => (
  <div key={name} className="references__item">
    <img src={`/references/${logo}.png`} alt={name} width="300" height="110" />
  </div>
));

const References = () => (
  <section className="home__part home__references">
    <div className="container references__container">
      <h1 className="references__title">
        They use <strong>.</strong>
      </h1>
      <h4>Open source projects</h4>

      <h4>Companies</h4>

    </div>
  </section>
);

export default References;
