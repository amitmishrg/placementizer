/**
*
* Tabs
*
*/

import React from 'react';
import tabStyle from './tab.css';
import { Link, IndexLink } from 'react-router';

class Tabs extends React.Component {

  render() {

    return (
	  	<div className="tab-container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <IndexLink className="nav-link" activeClassName="active" to="/dashboard/event-management/past-events">PAST EVENTS</IndexLink>
          </li>
          <li className="nav-item">
            <IndexLink className="nav-link"  activeClassName="active" to="/dashboard/event-management/upcoming-events">UPCOMING EVENTS</IndexLink>
          </li>
          <li className="nav-item">
            <IndexLink className="nav-link"  activeClassName="active" to="/dashboard/event-management/ongoing-events">ONGOING EVENTS</IndexLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default Tabs;
