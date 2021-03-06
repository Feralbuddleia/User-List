const {findBySearch, findOneByLogin, add, update, deleteByLogin, userLogin} = require('./controllers/User');

module.exports = (app) => {
  app.get('/users', findBySearch);
  app.get('/users/:login', findOneByLogin);
  app.post('/users/add', add);
  app.put('/users/update/:login', update);
  app.delete('/users/delete/:login', deleteByLogin);
  app.post('/users/login', userLogin);
}