const User = require("../../models/User");

const index = (req, res) => {
  const { page, limit } = req.query;
  User.paginate({}, { page, limit })
    .then(data => {
      res.status(200).json({
        data
      });
    })
    .catch(err => {
      res.status(500).json({
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
      $or: [{ firstName: re }, { lastName: re }, { gender: re }]
    };
  }
  const option = {
    page: +page,
    limit: +limit,
    sort: {}
  };
  if (sort) {
    option.sort = JSON.parse(sort);
  }
  User.paginate(condition, option)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({});
    });
};

const findOneByLogin = (req, res) => {
  try {
    const { login } = req.params;
    User.find({ login }, (err, user) => {
      if (err) throw err;

      res.status(200).json(user);
    });
  } catch (err) {
    res.status(500).json({
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
    newUser.save((err, user) => {
      if (err) throw err;
      res.status(200).json({
        user
      });
    });
  } catch (err) {
    res.status(500).json({
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
    res.status(500).json({
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
    res.status(500).json({
      err
    });
  }
};

const userLogin = (req, res) => {
  try {
    const { login, password } = req.body;
    User.findOne({ login }, (err, user) => {
      if (err) throw err;
      if (user) {
        if (user.password === password) {
          res.status(200).json({
            login: user.login,
            firstName: user.firstName,
            status: 1
          })
        } else {
          res.status(200).json({
            status: 0
          });
        }
      } else {
        res.status(200).json({
          status: -1
        });
      }
    })
  } catch (err) {
    res.status(500).json({
      err: err.response.data
    })
  }
}

module.exports = { findBySearch, findOneByLogin, add, update, deleteByLogin, userLogin };
