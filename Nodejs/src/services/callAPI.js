import axios from 'axios'

export async function JobAPI () {
  let url = `https://jobs-api.blognone.com/search`
  let result = await axios.get(url)
  let page = result.data.jobs_count / result.data.per_page
  let allResult = []
  let request = []
  for (let index = 1; index <= page+1; index++) { 
    allResult.push(url+'?page='+index)
  }
  return Promise.all(allResult.map(url=>{
    return axios.get(url)
  }))
}