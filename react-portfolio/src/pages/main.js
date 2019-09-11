import React, { Component } from 'react';
import {About} from '../components/aboutme';
import {Landing} from '../components/landingpage'
import { Experience} from '../components/experience'
import {Skill} from '../components/skill'
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

