const express = require('express');
const router = express.Router();
const {
  studentsGet,
  studentsUpdate,
  studentsDelete,
  studentsCreate,
} = require('./students.controllers');

router.get('/', studentsGet);
router.post('/', studentsCreate);

router.delete('/:studentId', studentsDelete);

router.put('/:studentId', studentsUpdate);

module.exports = router;
