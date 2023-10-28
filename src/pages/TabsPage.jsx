import React, { Suspense, useEffect } from 'react';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Loader from '../components/Loader';
import { renderLazyComponent } from '../utils/renderLazyComponent';

const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find((tab) => tab.id === tabId);
  const activeTabIndex = tabs.findIndex((tab) => tab.id === tabId);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTabIndex === -1 && tabs.length > 0) {
      navigate(`../${tabs[0].id}`);
    }
  }, [activeTabIndex, tabs, navigate]);

  return (
    <>
      <div className='tabs is-boxed pt-6 mt-4 '>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': index === activeTabIndex || (index === 0 && activeTabIndex === -1) })}
            >
              <Link to={`../${tab.id}`}>
                <span className='icon is-small'>
                  <i className={tab.icon} aria-hidden='true'></i>
                </span>
                <span>{tab.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Suspense fallback={<Loader />}>
          {activeTab && renderLazyComponent(activeTab.id)}
        </Suspense>
      </div>

      <Outlet />
    </>
  );
};

export default TabsPage;
