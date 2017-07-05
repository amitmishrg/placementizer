

import React from 'react';
import HeroStyle from './hero.css'

class Hero extends React.Component {

    render() {

      return (
        <div className="hero-wrapper container">
            <header className="col-md-10 col-centered text-center">
                <h1>Lets get Placed easly</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry, It is a long established fact that a reader will be distracted.</p>
                <a href="#" className="btn btn-secondary learn-more">Learn More</a>
            </header>
        </div>
      )

    }
}

export default Hero;
