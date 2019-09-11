import React, { Component } from 'react';
import axios from 'axios'
import {config} from '../config/config'
export class MapQuestion extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      MapData : {results:[]},
      input:'Bang Sue'
    }
    this.requestData(this.state.input)
  }

  requestData(input){
    const url = `${config.API_URL}/api/nearby?placeSearch=${input}`  
    axios.get(url).then((result)=>{
      this.setState({MapData:result.data,input:input})
    }).catch(err=>{     
      alert(err)
    })
  }
  setData(data){
    let mapData = data.results
    let render = mapData.map(item=>{
     return this.renderCard(item)
   })
   return render
  }
  onChange(event){
    this.setState([...this.state,this.state.input])
    this.requestData(this.state.input)    
  }
  handleChange(event) {
    this.setState({ input: event.target.value });   
  }
  urlGoToMap(data){
    const {geometry,name} = data
    const lat = geometry.location.lat
    const long = geometry.location.lng
    const url = `https://www.google.com/maps/place/${name}/@${lat},${long},15.21z`
    return url
  }
  urlPicture(data){
    const {photos} = data
    const key = "AIzaSyDzbzxOJyY0Q_usAYcxJWbOLZBnGY9Ez9k"
    if(photos){
      let url = photos.map((item)=>{
      return  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.photo_reference}&key=${key}`
    })
    return url[url.length-1]    
    }else{
      return  `https://maps.googleapis.com/maps/api/place/photo`
    }
    
  }
  renderCard(data){
    return <div className="card" style={{width: '18rem',maxWidth:'100%'}} id={data.id}>
        <img src={this.urlPicture(data)} className="card-img-top" alt={data.name} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.formatted_address}</p>         
          <a href={this.urlGoToMap(data)} className="btn btn-primary">Go</a>
        </div>
      </div>
  }
  render() {
    return(
    <div className="container justify-content-center">
    <div>Question 2 :  Please create a new page for showing results from your API</div>
    <div className="row">
      <div className="col-10">
          Area :<input type="text" className="form-control" onChange={this.handleChange.bind(this)}/>
      </div>
      <div className="col-2" style={{alignSelf: "flex-end"}}>
        <button  type="button" class="btn btn-primary" onClick={this.onChange.bind(this)}>Search</button>     
      </div>         
    </div>    
    <div className="row">
      {this.state.MapData.results.map((item)=>{
        return <div className="col-sm-4 col-md-3 p-3">{this.renderCard(item)}</div>
      })}
    </div>    
    
    </div>
    
    )
  }
}
