import React, { Component } from 'react';
export class Footer extends Component {

  render() {
    return (
      <footer>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-12 py-5">
            <div style={{textAlign:'center'}}>
              <a className="contact" href="https://www.facebook.com/winday.chi">
                <i className="fa fa-facebook-square fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
              </a>
              <a className="contact" href="https://www.youtube.com/channel/UC44zFQ1HITnOcU-rB0r1PIQ">
                <i className="fa fa-youtube-square fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              
              <a className="contact" href="https://www.linkedin.com/in/wanchai-nupinit/">
                <i className="fa fa-linkedin-square fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a className="contact" href="https://www.instagram.com/winday_chai/">
                <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>              
            </div>
          </div>
        </div>
        <div style={{textAlign:'center',paddingBottom:'10px'}}>
          <a href="/">© 2019 Copyright: Wanchai</a>
        </div>
      </div>
      
    </footer>
    
    )
  }
}