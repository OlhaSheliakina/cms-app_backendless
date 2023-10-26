import 'bulma/css/bulma.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const getLinkClass = ({ isActive }) =>
  classNames('navbar-item', { 'is-active': isActive });

const Navigation = ({ tabs }) => {
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
          {tabs.map((tab) => (
            <NavLink key={tab.id} to={`${tab.id}`} className={getLinkClass}>
              <span className='icon-text'>
                <span className='icon'>
                  <i className={tab.icon}></i>
                </span>
                <span>{tab.title}</span>
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
