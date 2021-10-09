const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const {
    commed_update,
    commend_delete,
    commend_get,
    commend_register
} = require('../controller/commend')

// get commend
router.get('/:commendId', checkAuth, commend_get)

// register commend
router.post('/', checkAuth, commend_register)

// update commend
router.patch('/:commendId', checkAuth, commed_update)

// delete commend
router.delete('/:commendId', checkAuth, commend_delete)

module.exports = router