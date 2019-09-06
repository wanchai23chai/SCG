import React, { Component } from 'react';
import {images} from '../utils/image'
import _ from 'lodash'
export class Skill extends Component {  
  state = {
    skill: require('../data/skill.json')
  }
  componentDidMount(){
    this.setState({skill:this.sortByPerformance()})
  }
  sortByPerformance(){
    let percent = this.state.skill.map((item)=>{
      item.percent = parseInt(item.percent,10)
      return item
    })
    let sort = _.orderBy(percent,['percent'],['desc'])
    return sort
  }
 
  render() {
    return(
      <div className="container" id="skills">
        <div style={{textAlign:"center"}}>
            <h1 className="title-section">Skills</h1>
        </div>
        <div className="row">         
          {this.state.skill.map((item)=>{
           return <div className="col-sm-12 col-md-6 col-xd-6 p-3" >
            <div style={{display: "flex",flexWrap: "wrap"}}>
                <div className="col-2 p-0">
              <img className="img-responsive" src={images[item.skill]?images[item.skill]:images['empty']} alt={item.skill} width="100%" height="100%"/>
            </div>
            <div className="col-10 p-2" style={{alignSelf: "center"}}>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{"width": item.percent+"%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            </div>         
          </div>
          })}   
        </div>

      </div>
    )
  }
}


