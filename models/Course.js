const { model, Schema } = require('mongoose');

const CourseSchema = new Schema({
  name: String,
});

module.exports = model('Course', CourseSchema);
