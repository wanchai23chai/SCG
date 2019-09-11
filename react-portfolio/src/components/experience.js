import React, { Component } from 'react';
import '../css/experience.css'
import {Timeline} from './timeline'
export class Experience extends Component {
  state = {
    data: require('../data/experience.json')
  }
  render() {
    return(
      <div className="container" id="experience">
        <div className="page-header text-center">
          <h1 className="title-section">My Experience</h1>
        </div>
        <Timeline itemsList={this.state.data}/>
      </div>
    )
  }
}


