const { User, Thought } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .select('-__v')
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  }
  // Other methods to be implemented
};
