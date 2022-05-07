const Course = require('../../models/Course');

exports.coursesCreate = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.coursesDelete = (req, res) => {
  const { courseId } = req.params;
  try {
    const foundCourse = await Course.findById(+courseId);
    if (foundCourse){
      await foundCourse.remove();
      res.status(204).end();
  } else {
    res.status(404).json({ message: "Course not found" });
  }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.coursesUpdate = async (req, res) => {
  const { courseId } = req.params;
  try {
    const foundCourse = await Course.findById(+courseId);
    if (foundCourse) {
      await foundCourse.findByIdAndUpdate(courseId, req.body, { new: true });
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.coursesGet = async (req, res) => {
  try {
    const courses = await Course.find({}, '-createdAt -updatedAt');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


