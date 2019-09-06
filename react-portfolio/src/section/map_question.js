import React, { Component } from 'react';
export class MapQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MapData : require('../data/map.json')
    }
  } 
  setData(data){
    let mapData = data.results
    let render = mapData.map(item=>{
     return this.renderCard(item)
   })
   return render
  }
  onChange(event){
    const data = fetch(`${process.env.API}/api/nearby?placeSearch=${event.target.value}`).then(results=>{
      this.setState({data:results})
    })
    console.log(data)
  }
  urlGoToMap(data){
    const {geometry} = data
    const lat = geometry.location.lat
    const long = geometry.location.lng
    const url = `https://www.google.com/maps/@${lat},${long},15.21z`
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
    <div className="form-group">
        <label htmlFor="input">Area :</label>
        <input type="text" className="form-control" id="input" onChange={this.onChange.bind(this)}/>
        
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
