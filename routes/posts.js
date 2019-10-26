const express = require('express')
const router = express.Router();
const Post = require('../models/Post');

//READ ALL
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        req.json({ message: err });
    }

});

router.get('/specific', (req, res) => {
    res.send('we are at specific')
})

// router.post('/',(req,res)=>{
//     console.log(req.body)
// })

//CREATE ONE
// router.post('/',async (req,res)=>{
//     console.log('Post Request',req.body)
//     const post=new Post({
//         title:req.body.title,
//         description:req.body.description
//     });

// post.save()
// .then(data=>{
//     res.json(data)
// })
// .catch(err=>{
//     res.json({message:err})
// });
//     try {
//         const savedPost = await post.save();
//         res.json(savedPost);
//       } catch (err) {
//         // res.status(400).send(err);
//         res.status(400).json(err);
//       }
// });

//TODO => POST REQUEST
router.post('/', async (req, res) => {
    console.log('post request', req.body);
    const { title, description } = req.body;
    const post = new Post({
        title: title,
        description: description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        // res.status(400).send(err);
        res.status(400).json(err);
    }
});


//TODO <== GET REQUEST WITH SPECIFIC ID
router.get('/:postid', async (req, res) => {
    const { postid } = req.params;
    try {
      const specificPost = await Post.findById(postid);
      res.json(specificPost);
    } catch (err) {
      res.json({ message: err });
    }
  });


//TODO <==> DELETE POST SPECIFIC

router.delete('/:postid',async (req , res) =>{
    const { postid } =req.params;
    try{
        const deletePost = await Post.remove({_id: postid});
        res.json(deletePost)
    } catch (err){
        res.json({message: err});
    }
})


//TODO ==> UPDATE POST SPECIFIC
router.patch('/:postid',async (req,res)=>{
    const { postid } = req.params;
    try{
        const updatePost = await Post.updateOne(
            {_id : postid},
            { $set : { title:req.body.title,description:req.body.description}},
        );

        res.json(updatePost)
    } catch(err){
         res.json({message:err});
    }
})


module.exports = router;