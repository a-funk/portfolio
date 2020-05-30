import React, { Component } from 'react';
import './App.css'
import TabList from './Components/TabList';
import Body from './Components/Body';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render() {
    const tabs = [
      {
        id: 1,
        title: 'Home',
      },
      {
        id: 2,
        title: 'Watercolor Paintings by Me',
      },
      {
        id: 3,
        title: 'Great YouTube videos',
      },
      {
        id: 4,
        title: 'Genesis',
      },
      
      {
        id: 6,
        title: 'Movie List',
      },
      {
        id: 7,
        title: 'Add Movie',
      },
      {
        id: 8,
        title: 'Create List',
      },
    ]
    return(
      <div className='body'>
        <div className='header'><h1>Alex Funk</h1> <h2>International Man of Mystery</h2></div>
        <div className='nav-bar'>
          <TabList tabs={tabs} changeTab={this.changeTab} activeTab={this.state.activeTab}/>
        </div>
        <div className='main-body'>
          <Body activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}
export default App;