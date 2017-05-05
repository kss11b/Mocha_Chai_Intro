var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var posts = require('../controllers/posts.js');
module.exports = function(app) {
  app.post('/create', function(req, res) {
    console.log('routes reached')
    users.create(req, res);
  });
  app.post('/login', function(req, res) {
    users.login(req, res);
  });
  app.post('/post', function(req, res) {
    posts.post(req, res)
})
  app.get('/pull', function(req, res){
    posts.pull(req, res)
  })
  app.get('/users/:id', function(req, res){
    users.show(req, res)
  })
  app.post('/comment', function(req, res){
    posts.comment(req, res)
  })
}
