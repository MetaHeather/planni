const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followedAssignmentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    assignment:{
        type: Schema.Types.ObjectId,
        ref: 'Assignment',
    },
    isDone: Boolean,
    checklist: [{
        item:{
            type: Schema.Types.ObjectId,
            ref: 'ChecklistItem'
        },
        isDone: Boolean
    }]
});

module.exports = mongoose.model('FollowedAssignment', followedAssignmentSchema);