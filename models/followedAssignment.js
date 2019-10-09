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
    checklist: [{}]
});

module.exports = mongoose.model('FollowedAssignment', followedAssignmentSchema);