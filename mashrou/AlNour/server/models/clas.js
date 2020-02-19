const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clasSchema = new Schema({
    name: String,
    subject: String,
    description: String,
    scheduleId: String
});

module.exports = mongoose.model('Class',clasSchema);