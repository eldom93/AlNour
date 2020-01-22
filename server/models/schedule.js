const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    name: String,
    ages: String,
    semester: String,
    time: String,
    cost: String,
    openslots: Number
});

module.exports = mongoose.model('Schedule',scheduleSchema);