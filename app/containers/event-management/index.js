/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Cards from 'components/cards';
import eventManagement from './event-management.css';
import CardsData from 'data.json';
import Tabs from 'components/tab';
import PastEvents from './past-events/index.js'

export class EventManagement extends React.Component {

  render() {
    let location = this.props.location.pathname;
    if (location === '/dashboard/event-management' || location === '/dashboard/event-management/') {
      browserHistory.push('/dashboard/event-management/past-events');
    }
    return (
        <div>
            <Helmet
              title="Event Management"
              meta={[
                { name: 'Event Management', content: 'Event Management' },
              ]}
            />
            <Tabs />
            { React.Children.toArray(this.props.children)}
        </div>
    );
  }
}

export default EventManagement;
