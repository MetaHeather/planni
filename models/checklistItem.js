const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checklistItemSchema = new Schema({
    title: String
});

module.exports = mongoose.model('ChecklistItem', checklistItemSchema);