const { model, Schema } = require('mongoose');

const StudentSchema = new Schema({
  name: String,
});

module.exports = model('Student', StudentSchema);
