/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/header';
import Footer from 'components/footer';

export class App extends React.Component {

  render() {

    return (
      <section className="container">
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
    );

  }
}

export default App;
