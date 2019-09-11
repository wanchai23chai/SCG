import express from 'express'
import * as SCGController from '../controllers/SCGController'
import * as SCGValidation from '../middlewares/SCGValidation'

const router = express.Router()
router.post('/xyz',SCGValidation.questionXYZ,SCGController.findValue)
router.get('/nearby',SCGValidation.nearByPlace,SCGController.nearBy)
module.exports = router