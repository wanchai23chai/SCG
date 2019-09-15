import React, { Component } from 'react';
import './css/bootstrap/bootstrap.css'
import { Route } from 'react-router-dom'
import {MainPage} from './pages/main'
import {Landing} from './components/landingpage'
import {Footer} from './components/footer'
import {About} from './components/aboutme';
import {Header} from './components/header';
import {Skill} from './components/skill'
import {QuestionPage} from './pages/question'
import { Experience} from './components/experience'
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{marginTop:'15vh', height:'100%',marginBottom:'10vh'}}>
          <Route exact path="/" component={MainPage} />
          <Route path="/it-me" component={Landing} />
          <Route path="/about-me" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/skills" component={Skill} />
          <Route path="/scg" component={QuestionPage} />        
        </div>
        <Footer/>
      </div>

    );
  }
}

export default App;
