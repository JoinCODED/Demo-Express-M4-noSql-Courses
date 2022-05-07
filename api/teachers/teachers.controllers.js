const Teacher = require('../../models/Teacher');

exports.fetchTeacher = async (teacherId, next) => {
  try {
    const teacher = await Teacher.findById(teacherId);
    return teacher;
  } catch (error) {
    next(error);
  }
};

exports.teachersCreate = async (req, res, next) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    next(error);
  }
};

exports.teachersDelete = async (req, res, next) => {
  try {
    await Teacher.findByIdAndRemove(req.teacher.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.teachersUpdate = async (req, res, next) => {
  try {
    await Teacher.findByIdAndUpdate(req.teacher.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.teachersGet = async (req, res, next) => {
  try {
    const teachers = await Teacher.find({}, '-createdAt -updatedAt');
    res.json(teachers);
  } catch (error) {
    next(error);
  }
};
