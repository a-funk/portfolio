import React, { Component } from 'react';
import ProjGallery from './ProjGallery';
import Genesis from '../images_art/genesislogo.jpeg'

export class Projects extends Component {
  componentDidMount(){
    document.title = 'Genesis';
  }

  render() {
    const projects = [
      {
        id: 1,
        src: Genesis,
        alt: 'Genesis Logo',
        title: 'Genesis',
        desc: 'What Genesis offers is consistent, high accuracy labeled data that our customers can use to build better, smarter and less expensive AI-solutions while offering gig-economy workers of any background economic mobility.',
        link: 'https://www.newventure.live/finalists/#teamseven'
      }
    
    ]
    return (
      <div>
        <div className='content'>
          <ProjGallery projects={projects} />
        </div>
        <button className='scrollButton' style={{display: this.props.display}} onClick={this.props.scrollToTop}>Scroll to Top</button>
      </div>
    );
  }
}
export default Projects;