const express = require('express');
const router = express.Router();
const assignmentCtrl = require('../../controllers/assignments');
const { checkAuth } = require('../utilities');
/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, assignmentCtrl.create);


module.exports = router