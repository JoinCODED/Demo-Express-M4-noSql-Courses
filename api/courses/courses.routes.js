const express = require('express');
const router = express.Router();
const {
  coursesGet,
  coursesUpdate,
  coursesDelete,
  coursesCreate,
} = require('./courses.controllers');

router.get('/', coursesGet);
router.post('/', coursesCreate);

router.delete('/:courseId', coursesDelete);

router.put('/:courseId', coursesUpdate);

module.exports = router;
