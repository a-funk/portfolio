import React, { Component } from 'react';
import Gallery from './Gallery';
import A1 from '../images_art/small/ants.jpg'
import dev1 from '../images_art/small/dev10218cc.jpg'
import dev2 from '../images_art/small/devs2619CC.jpg'
import feb from '../images_art/small/feb2.20.20.jpg'
import grey from '../images_art/small/grey_sunset_devs.jpg'
import greys from '../images_art/small/grey_sunset.jpg'
import ml from '../images_art/small/machinelearning.jpg'
import rock from '../images_art/small/rockaway_cliffs.jpg'
import martins from '../images_art/small/martins_beach_rock.jpg'


export class Images extends Component {
  enlarge(imgSrc) {
    var lbContent = document.createElement('img');
    lbContent.className = 'lightbox-content';
    lbContent.src = imgSrc;
    lbContent.id = 'lbContent';
    var lightbox = document.createElement('div');
    lightbox.id = 'lb';
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);  
    document.getElementById('lb').appendChild(lbContent);
    document.getElementById('lb').addEventListener('click', function(event) {
      if(event.target.className !== 'lightbox-content') {
        document.getElementById('lb').removeChild(document.getElementById('lbContent'));
        document.body.removeChild(document.getElementById('lb'));
      }
    });
  }

  componentDidMount(){
    document.title = 'Discover More';
  }
  
  render() {
    const images = [
      {
        id: 1,
        src: A1,
        alt: 'Ants',
        caption: 'An abstract painting depicting the ants in my home'
      },
      {
        id: 2,
        src: dev1,
        alt: 'Devereux Sunset',
        caption: 'Sunset at Devereux'
      },
      {
        id: 3,
        src: dev2,
        alt: 'Devs Sunset',
        caption: 'Another Devereux Sunset'
      },
      {
        id: 4,
        src: feb,
        alt: 'Another Sunset',
        caption: 'ANOTHER ANOTHER Devereux Sunset'
      },
      {
        id: 5,
        src: grey,
        alt: 'Sunset on Cloudy Day',
        caption: 'Surfer and a Cloudy day'
      },
      {
        id: 6,
        src: greys,
        alt: 'Grey Sunset',
        caption: 'Grey Sunset over the cliffs at Campus Point'
      },
      {
        id: 7,
        src: ml,
        alt: 'Machine Learning',
        caption: 'Abstract painting of machine learning'
      },
      {
        id: 8,
        src: rock,
        alt: 'Sunset at Rockaway',
        caption: 'Sunset on the cliffs at Rockaway in Half Moon Bay'
      },
      {
        id: 9,
        src: martins,
        alt: 'Martins Beach',
        caption: 'Painting of my favorite beach in the world, Martins Beach'
      },
    ]
    return (
      <div>
        <div className='content'>
          <div className='img-container'>
            <Gallery images={images} enlarge={this.enlarge} />
          </div>
        </div>
        <button className='scrollButton' style={{display: this.props.display}} onClick={this.props.scrollToTop}>Scroll to Top</button>
      </div>
    );
  }
}
export default Images;