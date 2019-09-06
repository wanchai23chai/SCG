"use strict";
import axios from 'axios'
import querystring from 'querystring'
export class MapAPI {
  constructor(API_KEY) {
    this.API_KEY = API_KEY || process.env.MAP_API_KEY
    this.URL = "https://maps.googleapis.com/maps/api"
  }
  getNearby(radius, placeType, placeSearch) {
    const params = {
      radius: radius,
      type: placeType,
      key: this.API_KEY,
      query: `${placeType}+in+${placeSearch}`
    }
    const placeUrl = this.URL + `/place/textsearch/json?${querystring.stringify(params)}`
    return axios.get(placeUrl)
  }
}