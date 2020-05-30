import React, { Component } from 'react';
import VidGallery from './VidGallery';

export class Videos extends Component {
  componentDidMount(){
    document.title = 'Fun Videos';
  }

  render() {
    const videos = [
      {
        id: 1,
        src: 'https://www.youtube.com/embed/ZeQMxy-Uf3M',
        title: 'Great Weird Video',
        caption: 'Unbelievable geodome simulation'
      },
      {
        id: 2,
        src: 'https://www.youtube.com/embed/x7ZrKehQ_xc',
        title: 'Gary\'s Mod Themepark',
        caption: 'A surreal experience from beginning to end.'
      },
      {
        id: 3,
        src: 'https://www.youtube.com/embed/14hO4omkZ0I',
        title: 'Silly Meme Video',
        caption: 'Hilarious compilation of memes!'
      }
 
    ]
    return (
      <div>
        <div className='content'>
          <div className='vid-container'>
            <VidGallery videos={videos} />
          </div>
        </div>
        <button className='scrollButton' style={{display: this.props.display}} onClick={this.props.scrollToTop}>Scroll to Top</button>
      </div>
    );
  }
}
export default Videos;