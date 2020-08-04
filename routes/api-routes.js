const express = require('express')
const DataCtrl = require('../controllers/api-ctrl')

const router = express.Router()

router.post('/data', DataCtrl.createData)
router.delete('/data/:id', DataCtrl.deleteData)
router.get('/data/:user_id', DataCtrl.getData)
router.get('/data/:user_id/:id', DataCtrl.getDataById)
router.get('/data/latest/:user_id', DataCtrl.getDataById)

module.exports = router