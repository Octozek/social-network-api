const { Thought, User } = require('../models');

module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .select('-__v')
      .then(thoughts => res.json(thoughts))
      .catch(err => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  }
  // Other methods to be implemented
};
