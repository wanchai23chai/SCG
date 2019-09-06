import {
  MapAPI
} from '../services/MapAPI'
import {findNumberSeries} from '../utils/findXYZ'

export function findValue(req, res, next) {
  let arrayQuestion = req.body.question.replace(new RegExp(' ', 'g'), '').split(',')
  const ans = findNumberSeries(arrayQuestion)
  return res.json({'question':req.body.question,'answer':ans})
}

export async function nearBy(req, res, next) {
  let {
    radius,
    placeType,
    placeSearch
  } = req.query
  const placeApi = new MapAPI()
  const nearBy = await placeApi.getNearby(radius, placeType, placeSearch)
  return res.json(nearBy.data)
}
