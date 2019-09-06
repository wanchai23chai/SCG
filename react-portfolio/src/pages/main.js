import React, { Component } from 'react';
import {About} from '../section/aboutme';
import {Landing} from '../section/landingpage'
import { Experience} from '../section/experience'
import {Skill} from '../section/skill'
import '../css/App.css'
export class MainPage extends Component {
  render() {
    return(
      <div>
      <Landing/>
      <About/>
      <Experience/>
      <Skill/>
    </div>
    )
  }
}

