/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Sidebar from 'components/sidebar';
import DashboardHeader from 'components/header/dashboard-header';
import Header from 'components/header';
import Footer from 'components/footer';

export class App extends React.Component {

  render() {
    let location = this.props.location.pathname;
    let renderApp;
    if (location === '/') {
        renderApp = (
            <section>
              <Helmet
                titleTemplate="%s - Placementizer"
                defaultTitle="Placementizer"
                meta={[
                  { name: 'description', content: 'Placementizer' },
                ]}
              />
              <Header />
                {React.Children.toArray(this.props.children)}
              <Footer />
            </section>
        )
    } else if (location === '/dashboard') {
        browserHistory.push('/dashboard/event-management');
    } else {
        renderApp = (
          <section className="container-fluid">
            <Helmet
              titleTemplate="%s - Placementizer"
              defaultTitle="Placementizer"
              meta={[
                { name: 'description', content: 'Placementizer' },
              ]}
            />
            <div className="row">
              <div className="col-sm-3 sidebar-container">
                  <Sidebar />
              </div>
              <div className="col-sm-9 main-container">
                  <DashboardHeader />
                  {React.Children.toArray(this.props.children)}
              </div>
            </div>
          </section>
        )
    }
    return (
        <div>
            {renderApp}
        </div>
    );

  }
}

export default App;
