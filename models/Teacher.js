const { model, Schema } = require('mongoose');

const TeacherSchema = new Schema({
  name: String,
});

module.exports = model('Teacher', TeacherSchema);
