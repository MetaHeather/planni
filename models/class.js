const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    members:[{
        type: Schema.Types.ObjectId,
        ref: 'User', 
    }]
});

module.exports = mongoose.model('Class', classSchema)