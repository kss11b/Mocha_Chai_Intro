var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment')
module.exports = {

  post: function(req, res){
    var newPost = new Post({
      text: req.body.text,
      author:req.body.author
    })
    newPost.save(function(err, doc){
      if(err){
        return res.json(err);
      }
      else{
        console.log('Create Post Successs')
        res.json(doc);
      };
    })
  },

  pull: function(req,res){
    console.log("pull")
    Post.find({}, function(err, post){
      if(err){
        res.json(err)
      }
      else{
        res.json(post);
      }
    }).populate("comments")


  },

  comment: function(req, res){
  console.log('marker' + req.body.text)
      var comment = new Comment({
        _post : req.body._post,
        text : req.body.text,
        author : req.body.author,
      })
      comment.save(function(err, doc){
        if(err){
          return res.json(err)
        }
        else{
          Post.findById(req.body._post).exec(function(err, post){
            if(err){
              res.json(err)
            }
            else{
              post.comments.push(comment);
              post.save(post)
              res.json(doc)
            }
        })
      }
    })
  }
}
