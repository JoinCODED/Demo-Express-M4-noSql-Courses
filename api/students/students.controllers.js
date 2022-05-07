const Student = require('../../models/Student');

exports.studentsCreate = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.studentsDelete = (req, res) => {
  const { studentId } = req.params;
  try {
    const foundStudent = await Student.findById(+studentId);
    if (foundStudent){
      await foundStudent.remove();
      res.status(204).end();
  } else {
    res.status(404).json({ message: "Student not found" });
  }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.studentsUpdate = async (req, res) => {
  const { studentId } = req.params;
  try {
    const foundStudent = await Student.findById(+studentId);
    if (foundStudent) {
      await foundStudent.findByIdAndUpdate(studentId, req.body, { new: true });
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.studentsGet = async (req, res) => {
  try {
    const students = await Student.find({}, '-createdAt -updatedAt');
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


