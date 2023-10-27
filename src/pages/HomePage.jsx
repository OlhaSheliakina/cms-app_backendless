import 'bulma/css/bulma.css';
import React from 'react';

const HomePage = () => {
  return (
    <section className='section is-medium has-text-centered mt-6'>
      <h2 className='title p-4'>
        Welcome to your projects Content Management System!
      </h2>
      <h3 className='title p-4'>Track the progress of your Projects with us</h3>
      <span className='icon has-text-dark is-large fas fa-2x'>
        <i className='fa-solid fa-chalkboard-user'></i>
      </span>
    </section>
  );
};

export default HomePage;
