const express = require('express');
const router = express.Router();
const {
  teachersGet,
  teachersUpdate,
  teachersDelete,
  teachersCreate,
} = require('./teachers.controllers');

router.get('/', teachersGet);
router.post('/', teachersCreate);

router.delete('/:teacherId', teachersDelete);

router.put('/:teacherId', teachersUpdate);

module.exports = router;
