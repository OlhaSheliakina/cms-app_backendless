import 'bulma/css/bulma.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getLinkClass = ({ isActive }) =>
  classNames('navbar-item', { 'is-active': isActive });

const Navigation = () => {
  return (
    <nav className='navbar is-dark is-fixed-top has-shadow'>
      <div className='container'>
        <div className='navbar-brand'>
          <NavLink to='/' className={getLinkClass}>Home</NavLink>
          <NavLink to='/tab1' className={getLinkClass}>Tab1</NavLink>
          <NavLink to='/tab2' className={getLinkClass}>Tab2</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
