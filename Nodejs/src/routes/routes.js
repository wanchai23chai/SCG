import express from 'express'
import * as SCGController from '../controllers/SCGController'
import * as SCGValidation from '../middlewares/SCGValidation'
import {webHook} from '../controllers/WebHook'
const router = express.Router()
router.post('/xyz',SCGValidation.questionXYZ,SCGController.findValue)
router.get('/nearby',SCGValidation.nearByPlace,SCGController.nearBy)
router.post('/hook',webHook)
module.exports = router