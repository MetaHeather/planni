const Assignment = require('../models/assignment');

module.exports = {
  create,
}

async function create (req, res) {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(201).json(assignment);
    } catch(err) {
        res.status(400).json(err);
    }
}

