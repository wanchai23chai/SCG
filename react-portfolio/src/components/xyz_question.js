import React, { Component } from 'react';
export class XYZQuestion extends Component {
  constructor(props){
    super(props);    
    this.state = {
      ans : [],
      key:{},
      input:this.props.input,
      output:[]
    }
  }
  componentWillMount(){
    this.findAns()
    this.templete()
  }
  onChange(event){
    this.setState({input:event.target.value})
    this.findAns()
    this.templete()
  }
  findAns(){
    let value = {}  
    let listOfQuestion = this.state.input.replace(new RegExp(' ', 'g'), '').split(',')  
    let ans = listOfQuestion.map((num, index) => {
      let term = Math.pow(index+1,2)-(index+1)+3
      if(!parseInt(num,10)){
        value[num] = term
      }
      return term
    })
    this.setState({ans:ans,key:value})
  }
  templete(){
    let renderAns = Object.keys(this.state.key).map((obj, i) => {
        return (<div key={i}>{obj} is: {this.state.key[obj]}</div>)
    })
    this.setState({output:renderAns})
  }
  componentDidMount(){
    this.templete()
  }
 
  render() {
    return(
    <div className="container" id={this.props.question}>
      <div className="form-group" >
        <label htmlFor="input">Question 1 : {this.props.question}</label>
        <input type="text" className="form-control" id="input" onChange={this.onChange.bind(this)} placeholder={this.state.input}/>
        <label htmlFor="output"> </label>
        <p>Answer : {this.state.input} ==> {this.state.ans.join(', ')}</p>
        {this.state.output}
      </div>
    </div>
    
    )
  }
}
