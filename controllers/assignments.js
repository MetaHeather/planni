const Assignment = require('../models/assignment');

module.exports = {
    create,
    show,
    deleteOne,
    update,
    index
}

async function create(req, res) {
    try {
        req.body.creator = req.user._id;
        const assignment = await Assignment.create(req.body);
        res.status(201).json(assignment);
    } catch(err) {
        res.status(400).json(err);
    }
}

async function show(req, res) {
    try{
        //find assignment that matches both the logged in user and the assignment id
        const assignment = await Assignment
            .findOne({_id: req.params.id, creator: req.user._id});
        res.status(201).json(assignment);
    } catch(err){
        res.status(400).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        //find assignment that matches both the logged in user and the assignment id
        const deletedAssignment = await Assignment
            .findOneAndDelete({_id: req.params.id, creator: req.user._id});
        res.status(201).json(deletedAssignment);
    } catch(err){
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try{
        //find assignment that matches both the logged in user and the assignment id
        const updatedAssignment = await Assignment
            .findOneAndUpdate({_id: req.params.id, creator: req.user._id}, req.body, {new: true});
        res.status(201).json(updatedAssignment);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try{
        const assignments = await Assignment.find({creator: req.user._id});
         res.status(200).json(assignments);
    } catch (err) {
        res.status(400).json(err);
    }
  }

