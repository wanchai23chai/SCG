import React, { Component } from 'react';
import {images} from '../utils/image'
import '../css/aboutMe.css'

export class About extends Component {
  render() {
    return(
      <section id="about-me">
        <div className="container">
          <div style={{    textAlign: "center"}}>
                <h2 className="title-section">About Myself</h2>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-6 about-me-left">
              <img className="img-fluid" src={images.chai02} alt="chai" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6  about-me-right">
              
              <div className="col-lg-12 col-md-12 col-sm-12  wow fadeIn" data-wow-duration=".8s">
                  <div className="col-12 about-item"> 
                      <img className="d-inline" src="https://img.icons8.com/nolan/64/000000/birthday.png" alt="birthday.png"/>
                      <h5 className="d-inline">January 23, 1995</h5>
                  </div>
                  <div className="col-12 about-item"> 
                      <img src="https://img.icons8.com/nolan/64/000000/gender.png" alt="gender.png"/>
                      <h5 className="d-inline">Male</h5>
                  </div>
                  <div className="col-12 about-item"> 
                      <img src="https://img.icons8.com/nolan/64/000000/university.png" alt="university.png"/>
                      <h5 className="d-inline">Prince of Songkla University</h5>
                  </div>
                  <div className="col-12 about-item"> 
                      <img src="https://img.icons8.com/nolan/64/000000/user-location.png" alt="user-location.png"/>
                      <h5 className="d-inline">Bangkok, Thailand</h5>
                  </div>
                  <div className="col-12 about-item"> 
                    <img src="https://img.icons8.com/nolan/64/000000/email.png" alt="email.png"/>
                    <h5 className="d-inline">wanchai.23.chai@gmail.com</h5>
                  </div>
                <p className="about-me-description">
                  My name is Wanchai Nupinit. I'm {(new Date().getFullYear())-1995} years old. 
                  I'm from Patthalung. I graduated from Prince of Songkla University, Hatyai , Songklha. 
                  Currently, I live in Bangkok, Thailand.
                </p>
              
              </div>
              <div style={{alignContent: 'center', textAlign: 'center'}}>
              
                <div style={{paddingTop: '5%'}} />
                <a href="https://drive.google.com/file/d/0B9Z1UhkkWg8vbFJ0MzdTeS1RcDA/view?usp=sharing" class="square_btn">
                  <span>RESUME</span>
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
  }
}

