const Course = require('../../models/Course');

exports.fetchCourse = async (courseId, next) => {
  try {
    const course = await Course.findById(courseId);
    return course;
  } catch (error) {
    next(error);
  }
};

exports.coursesCreate = async (req, res, next) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    next(error);
  }
};

exports.coursesDelete = async (req, res, next) => {
  try {
    await Course.findByIdAndRemove(req.course.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.coursesUpdate = async (req, res, next) => {
  try {
    await Course.findByIdAndUpdate(req.course.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.coursesGet = async (req, res, next) => {
  try {
    const courses = await Course.find({}, '-createdAt -updatedAt');
    res.json(courses);
  } catch (error) {
    next(error);
  }
};
