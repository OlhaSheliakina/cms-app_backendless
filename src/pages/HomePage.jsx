import 'bulma/css/bulma.css';
import React from 'react';

const HomePage = () => {
  return (
    <section className='section is-medium has-text-centered m-4'>
      <h2 className='title pt-4'>
        Welcome to your projects Content Management System!
      </h2>
      <h3 className='title pt-4'>Track the progress of your Projects with us</h3>
      <span className='icon has-text-dark is-large fas fa-2x'>
        <i className='fa-solid fa-chalkboard-user'></i>
      </span>
    </section>
  );
};

export default HomePage;
