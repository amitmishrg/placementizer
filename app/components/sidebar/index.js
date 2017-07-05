

import React from 'react';
import HeaderStyle from './sidebar.css';
import { Link, IndexLink} from 'react-router';

class Sidebar extends React.Component {

    render() {

      return (
          <header className="sidebar-wrapper">
            <nav>
              <a className="navbar-brand" href="#">Placementizer</a>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" activeClassName="active" to="/dashboard/event-management">Events Management</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" activeClassName="active" to="/dashboard/student-management">Student Management</Link>
                  </li>
                </ul>
            </nav>
          </header>
      )
    }
}

export default Sidebar;
