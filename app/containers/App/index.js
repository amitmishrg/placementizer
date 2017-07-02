/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

export function App(props) {
  return (
    <section>
      <Helmet
        titleTemplate="%s - Placementizer"
        defaultTitle="Placementizer"
        meta={[
          { name: 'description', content: 'Placementizer' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </section>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
