app.factory('postFactory', ['$http', '$cookies', function($http, $cookies) {
  var factory = {};

  factory.index = function(callback) {
    console.log("factory index")
      $http.get('/pull').then(function(res){
        callback(res);
      });
  }

  factory.post = function(newPost, callback) {
      $http.post('/post', newPost).then(function(res){
        console.log(res);
          callback(res);
        });
      }
  factory.comment = function(newComment, callback) {
    console.log('factory comment')
      $http.post('/comment', newComment).then(function(res){
        callback(res)
      })
  }

  return factory;
}]);
