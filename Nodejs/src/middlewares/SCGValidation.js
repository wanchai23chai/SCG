import _ from 'lodash'
import Joi from '@hapi/joi'

export async function questionXYZ(req, res, next) {
  const Validation = Joi.object().keys({
    question: Joi.string().trim().required()
  })
  Joi.validate(req.body, Validation, function (error, value) {
    if (error) {
      const err = {
        error: error.name,
        message:error.details[0].message
      }
      return res.status(400).json(err)
    }
    req.body = value
    next()
  })
}
export async function nearByPlace(req, res, next) {
  const Validation = Joi.object().keys({
    radius: Joi.number().integer().default(1500).optional(),
    placeType:Joi.string().trim().default('restaurants').optional(),
    placeSearch:Joi.string().trim().default('Bangsue').optional()
  })
  Joi.validate(req.query, Validation, function (error, value) {
    if (error) {
      const err = {
        error: error.name,
        message:error.details[0].message
      }
      return res.status(400).json(err)
    }else{
      req.query = value
      next()
    }
    
  })
}