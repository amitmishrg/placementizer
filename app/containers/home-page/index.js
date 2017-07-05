/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import HomeStyle from './home.css';
import Calender from 'assets/svg/calendar.svg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
        <section className="main-section">
          <article className="blue-wrapper">
            <div className="container">
              <header className="col-md-9 col-centered">
                  <h2>What we offer you</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing, It is a long established fact that a reader will be distracted.</p>
              </header>
              <div className="offer-section row">
                <div className="col-md-4">
                  <div className="content-wrapper">
                    <div className="icon">
                      {/* <Calender className="svg"/> */}
                    </div>
                    <div className="content">
                      <h3>Event Management</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content-wrapper">
                    <div className="icon">
                      {/* <Calender className="svg"/> */}
                    </div>
                    <div className="content">
                      <h3>Student Management</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content-wrapper">
                    <div className="icon">
                      {/* <Calender className="svg"/> */}
                    </div>
                    <div className="content">
                      <h3>New Event Management</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="container">
              <header className="col-md-9 col-centered">
                  <h2>How it Works ?</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing, It is a long established fact that a reader will be distracted.</p>
              </header>
              <div className="work-section">
                <div className="row">
                  <div className="content-wrapper blue">
                    <span className="border"></span>
                    <div className="lg-icon-wrap">
                      <div className="sm-icon-wrap">
                        {/* <Calender className="svg"/> */}
                      </div>
                    </div>
                    <div className="content">
                      <h3>Title Here</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="content-wrapper green">
                    <span className="border"></span>
                    <div className="lg-icon-wrap">
                      <div className="sm-icon-wrap">
                        {/* <Calender className="svg"/> */}
                      </div>
                    </div>
                    <div className="content">
                      <h3>Title Here</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="content-wrapper red">
                    <span className="border"></span>
                    <div className="lg-icon-wrap">
                      <div className="sm-icon-wrap">
                        {/* <Calender className="svg"/> */}
                      </div>
                    </div>
                    <div className="content">
                      <h3>Title Here</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="blue-wrapper">
            <div className="container">
              <header className="col-md-9 col-centered">
                  <h2>Contact Us</h2>
              </header>
              <form className="contact-form col-md-9 col-centered">
                <div className="row">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Last Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Phone" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group textarea">
                    <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="row btn-wrap">
                  <button className="btn btn-secondary btn-send">Send</button>
                </div>
              </form>
            </div>
          </article>
        </section>

    );
  }
}

export default HomePage;
