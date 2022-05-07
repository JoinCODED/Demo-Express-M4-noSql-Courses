const Teacher = require('../../models/Teacher');

exports.teachersCreate = async (req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersDelete = (req, res) => {
  const { teacherId } = req.params;
  try {
    const foundTeacher = await Teacher.findById(+teacherId);
    if (foundTeacher){
      await foundTeacher.remove();
      res.status(204).end();
  } else {
    res.status(404).json({ message: "Teacher not found" });
  }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersUpdate = async (req, res) => {
  const { teacherId } = req.params;
  try {
    const foundTeacher = await Teacher.findById(+teacherId);
    if (foundTeacher) {
      await foundTeacher.findByIdAndUpdate(teacherId, req.body, { new: true });
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.teachersGet = async (req, res) => {
  try {
    const teachers = await Teacher.find({}, '-createdAt -updatedAt');
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


