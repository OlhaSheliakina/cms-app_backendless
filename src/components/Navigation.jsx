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
          <NavLink to='/' className={getLinkClass}>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fas fa-home'></i>
              </span>
              <span>Home</span>
            </span>
          </NavLink>
          <NavLink to='/tabs' className={getLinkClass}>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fa-solid fa-chalkboard-user'></i>
              </span>
              <span>Tabs</span>
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
