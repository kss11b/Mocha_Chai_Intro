app.controller('dashController', ['$scope','userFactory', 'postFactory', '$routeParams', '$location', '$cookies', function($scope,userFactory, postFactory, $routeParams, $location, $cookies) {

  userFactory.session(function(res){
    if(!res){
      $location.url('/')
    }
    else{
    $scope.current_user = userFactory.current_user
  }
  })

  $scope.logout = function(){
    $cookies.remove('user_id');
    $location.url("/")
  }
  $scope.post = function(newPost){
    newPost.author = userFactory.current_user.username
    postFactory.post(newPost, function(res){
      $scope.posts = res.data
      $scope.index()
    })
  }
  $scope.index = function(){
    postFactory.index(function(res){
      $scope.posts = res.data
      // console.log($scope.posts)
    })
  }
  $scope.comment = function(newComment, _post){
    console.log(newComment._post)
    newComment._post=_post
    newComment.author = userFactory.current_user.username
    postFactory.comment(newComment, function(res){
      $scope.comments = res.data
      $scope.index()
    })
  }
  $scope.index()
  }])
