import React, { Component } from 'react';
import {XYZQuestion} from '../section/xyz_question'
import {MapQuestion} from '../section/map_question'
export class QuestionPage extends Component {
  render() {
    return(
    <div className="container">
      <XYZQuestion question="X, 5, 9, 15, 23, Y, Z  - Please create a new function for finding X, Y, Z value" input="X, 5, 9, 15, 23, Y, Z"/>
      <MapQuestion/>
    </div>
    )
  }
}