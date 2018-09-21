const express = require('express')
const multer = require('multer');
var router = express.Router();
var Post = require("../models/post");
var Comment = require("../models/comment");
var Reply = require("../models/replies");
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
  }
});
const upload =multer({storage:storage});

router.post('/uploadimage',upload.single('myFile'), function(req, res) {
    console.log("image added");
       });

router.post('/add',addPost);
function  addPost (req, res) {
var post = new Post(req.body);
console.log(req.body);
post.title=req.body.title;
post.description=req.body.description;
post.image=req.body.image
post.user= req.body.user;
post.save(function(err,result)
{

    if(err)
    {

        res.send("Post not added");
    }
    else
    {
        console.log(result);
        console.log("inserted");
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    }
});
};

router.get('/', (req, res) => {
  Post.find({}, function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})


router.get('/post/:id', (req, res) => {
  
  Post.findById(req.params.id, function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})


router.delete('/:_id/delete',deletePost);
function deletePost(req, res) {
    var id=req.params._id;
    Post.remove({_id: id}, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
}

//****************************** */

router.post('/addcomment',function(req,res){
    var comment = new Comment(req.body); 
     
  comment.texte=req.body.texte;
comment.post=req.body.idpost;
comment.user= "5ad94d71ecb5642c1cfe7e88";
    comment.save(function(err,result){
        if(err)
    {

        res.send("Comment not added");
    }
    else
    {
        console.log(result);
        console.log("inserted");
        res.send({
            success: true,
            message: 'Comment saved successfully!'
        })
    } 
    })
})
router.get('/comment/:id',function(req,res,next){
    var id = req.params.id ; 
    Comment.find({'post':id}).populate('post').exec(function(err,result){
        if(err){
            res.send(err); 
        }
         if(!result){
            res.status(404).send();
        }else{
            res.json(result);
            console.log("resultat est :"+result)
        }
    })
})

router.delete('/:_id/deleteComment',deleteComment);
function deleteComment(req, res) {
    var id=req.params._id;
    Comment.remove({_id: id}, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
}
//************************************ */


router.post('/addReply',function(req,res){
    var reply = new Reply(req.body); 
     
  reply.texte=req.body.texte;
reply.comment=req.body.idcomment;
reply.user= "5ad94d71ecb5642c1cfe7e88";

    reply.save(function(err,result){
        if(err)
    {

        res.send("reply not added");
    }
    else
    {
        console.log(result);
        console.log("inserted");
        res.send({
            success: true,
            message: 'reply saved successfully!'
        })
    } 
    })
})


router.get('/reply/:id',function(req,res,next){
    var id = req.params.id ; 
   Reply.find({'comment':id}).populate('comment').exec(function(err,result){
        if(err){
            res.send(err); 
        }
         if(!result){
            res.status(404).send();
        }else{
            res.json(result);
            console.log("resultat est :"+result)
        }
    })
})


router.delete('/:_id/deleteReply',deleteReply);
function deleteReply(req, res) {
    var id=req.params._id;
    Reply.remove({_id: id}, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
}





// Update a post
router.put('/edit/:id', (req, res) => {
  Post.findById(req.params.id, 'title ', function (error, post) {
    if (error) { console.error(error); }

    post.title = req.body.title
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})
  module.exports = router;
////
