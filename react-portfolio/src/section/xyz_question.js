import React, { Component } from 'react';
export class XYZQuestion extends Component {
  state = {
    ans : []
  }
  componentDidMount(){
    let value = {}  
    let listOfQuestion = this.props.input.replace(new RegExp(' ', 'g'), '').split(',')
    listOfQuestion.forEach((num, index) => {
      let term = Math.pow(index+1,2)-(index+1)+3
      if(!parseInt(num,10)){
        value[num] = term
      }
      return term
    })
    let renderAns = Object.keys(value).map((obj, i) => {
        return (
            <div>
                {obj} is: {value[obj]}
            </div>
        )
    })
    this.setState({ans:renderAns})
  }
 
  render() {
    return(
    <div className="container">
      <div className="form-group">
        <label htmlFor="input">Question 1 : {this.props.question}</label>
        <input type="text" className="form-control" id="input" value={this.props.input} readOnly/>
        <label htmlFor="output"> </label>
        <p>Answer : <br/>{this.state.ans}</p>
      </div>
    </div>
    
    )
  }
}
