const Assignment = require('../models/assignment');

module.exports = {
    create,
    show,
    deleteOne,
    update
}

async function create(req, res) {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(201).json(assignment);
    } catch(err) {
        res.status(400).json(err);
    }
}

async function show(req, res) {
    try{
        const assignment = await Assignment.findById(req.params.id);
        res.status(201).json(assignment);
    } catch(err){
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
        res.status(201).json(deletedAssignment);
    } catch(err){
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try{
        const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id); 
        res.status(201).json(updatedAssignment);
    } catch (err) {
        res.status(400).json(err);
    }
}