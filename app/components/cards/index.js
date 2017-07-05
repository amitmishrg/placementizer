/**
*
* Tabs
*
*/

import React from 'react';
import cardsStyle from './cards.css';

class Cards extends React.Component {

  render() {
    let renderCards;
    renderCards = this.props.cards.map((card, i) => {
        return (
            <div className="col-lg-4" key={i}>
              <div className="card-container">
                  <header>
                    <div className="info">
                        <div className="logo">
                            <span>G</span>
                        </div>
                        <div className="company-info">
                            <h5>{card.companyName}</h5>
                            <a href={card.companyUrl}>{card.companyUrl}</a>
                        </div>
                      </div>
                      <div className="desc">
                          <div className="rating">
                              <span>{card.rating}/5</span>
                          </div>
                          <div className="date">
                              <h5>Date</h5>
                              <span>{card.date}</span>
                          </div>
                        </div>
                  </header>
                  <footer>
                      <div className="student-list">
                          <ul>
                              <li></li>
                              <li></li>
                              <li></li>
                              <span className="count">+{card.totalStudentCount}</span>
                          </ul>
                      </div>
                      <a href="#" className="btn btn-secondry view-details">View Details</a>
                  </footer>
              </div>
            </div>
        )
    })
    return (
      <div className="row cards-wrapper">
        {renderCards}
      </div>
    );
  }
}
export default Cards;
