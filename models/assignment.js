const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    details: String,
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    links: [{ 
        title: String, 
        href: String 
    }],
    dueDate: {
        type: Date,
        required: true
    },
    checklistItems: [{
        type: Schema.Types.ObjectId,
        ref: 'Checklist'
    }],
},{
    timestamps:true
});

module.exports = mongoose.model('Assignment', assignmentSchema);