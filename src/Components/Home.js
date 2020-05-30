import React, { Component } from 'react';
import Portrait from '../images_art/alex.jpg';

export class Home extends Component {
  componentDidMount(){
    document.title = 'Alex Funk\'s Portfolio';
  }

  render() {
    return (
      <div>
        <div className='content'>
          <div className='section'>
            <div className='s1-image'>
              <img src={Portrait} alt='Me in San Francisco'/>
            </div>
            <div>
              <h2>About Me</h2>
              <hr/>
              <p>
               Hello. I am Alex Funk.  I am a Computer Science Major, Philosophy Minor and Technology Managment Certificate pursuer.
               I love to paint, surf, hangout with my friends and play videogames. I have been working on a startup for the better part of
               a year.  Here you will see some of my paintings, videos, and movies I enjoy, and learn about Genesis.
              </p>
            </div>
          </div>
        </div>
        <button className='scrollButton' style={{display: this.props.display}} onClick={this.props.scrollToTop}>Scroll to Top</button>
      </div>
    );
  }
}
export default Home;