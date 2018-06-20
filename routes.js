const express = require('express');

const router = express.Router();

//student routes
const studentController = require('./controllers/student')
router.get('/',studentController.get_all);
router.post('/',studentController.add_new);
router.patch('/:id',studentController.update_id);
router.delete('/:id',studentController.delete_id);

module.exports = router
