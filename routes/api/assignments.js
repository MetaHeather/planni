const express = require('express');
const router = express.Router();
const assignmentCtrl = require('../../controllers/assignments');
const { checkAuth } = require('../utilities');
/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.get('/', assignmentCtrl.index);
router.post('/', checkAuth, assignmentCtrl.create);
router.delete('/:id', checkAuth, assignmentCtrl.deleteOne)
router.put('/:id', checkAuth, assignmentCtrl.update)
router.get('/:id', checkAuth, assignmentCtrl.show);


module.exports = router