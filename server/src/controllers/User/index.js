const User = require("../../models/User");

const index = (req, res) => {
  const { page, limit} = req.query;
  User.paginate({}, { page, limit })
    .then(data => {
      res.status(200).json({
        data
      });
    })
    .catch(err => {
      res.status(403).json({
        err
      });
    });
};

const findBySearch = (req, res) => {
  const { page, limit, search, sort } = req.query;
  let condition = {};
  if (search) {
    const re = new RegExp(search);
    
    condition = {
      $or: [
        {firstName: re},
        {lastName: re},
        {gender: re}
      ]
    }
  }
  const option = { 
    page: +page,
    limit: +limit
  };
  if (sort) {
    option.sort = sort;
  }
  console.log(condition, option);
  User.paginate(condition, option)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(403).json({})
    })
}

const findOneByLogin = (req, res) => {
  try {
    const { login } = req.params;
    User.find({ login }, (err, user) => {
      if (err) throw err;

      res.status(200).json(user);
    });
  } catch (err) {
    res.status(403).json({
      err
    });
  }
};

const add = (req, res) => {
  try {
    const newUser = new User(req.body);
    if (newUser.age) {
      newUser.age = +newUser.age;
    }
    console.log(req.body);
    newUser.save((err, user) => {
      if (err) throw err;
      res.status(200).json({
        user
      });
    });
  } catch (err) {
    res.status(403).json({
      err
    });
  }
};

const update = (req, res) => {
  try {
    const { login } = req.params;
    const updateUser = req.body;
    User.findOneAndUpdate({ login }, updateUser, (err, user) => {
      if (err) throw err;
      res.status(200).json({
        user
      });
    });
  } catch (err) {
    res.status(403).json({
      err
    });
  }
};

const deleteByLogin = (req, res) => {
  try {
    const { login } = req.params;
    User.findOneAndRemove({ login }, err => {
      if (err) throw err;
      res.status(200).json({
        message: "delelte user success"
      });
    });
  } catch (err) {
    res.status(403).json({
      err
    });
  }
};

module.exports = { findBySearch, findOneByLogin, add, update, deleteByLogin };
