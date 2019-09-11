import React, { Component } from 'react';
import '../css/landing.css'
import {images} from '../utils/image'
export class Landing extends Component {
  render() {
    return(
      <div className="container" style={{marginTop:'6%'}}>     
        <section className="home-banner-area" id="it-me">
          <div className="container">      
              <div className="col-lg-12 col-md-12 col-sm-12 justify-content-center ">                
                <div className="row wow fadeInUp position" data-wow-duration="1s" data-wow-delay="2.1s">                
                  <div className="col-lg-6 col-md-6 col-sm-6">
                  <div style={{textAlign:'center'}}>
                    <h1 className="wow fadeInUp title-section" data-wow-duration="1s" data-wow-delay="1.7s">Wanchai Nupinit</h1>
                    <h3 className="subTitle">Software Developer</h3>
                    <div id="linkedIn">
                       <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="th_TH" data-type="vertical" data-theme="light" data-vanity="wanchai23nupinit">
                        <a className="LI-simple-link" href="https://th.linkedin.com/in/wanchai23nupinit?trk=profile-badge">Wanchai Nupinit</a></div>
                    </div>          
                  </div>                
                  </div>                 
                  <div className="col-lg-6 col-md-6 col-sm-6 align-self-end">
                    <img className="img-fluid" src={images.chai01} alt="chai" />
                  </div>
                </div>					
              </div>           
          </div>
        </section>
      </div>
    )
  }
}

