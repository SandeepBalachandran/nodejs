const express = require ('express')
const router = express.Router();
const Post = require('../models/Post');


router.get('/',(req,res)=>{
    res.send("We are on posts")
})

router.get('/specific',(req,res)=>{
    res.send('we are at specific')
})

// router.post('/',(req,res)=>{
//     console.log(req.body)
// })

router.post('/',async (req,res)=>{
    console.log('Post Request',req.body)
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });

    // post.save()
    // .then(data=>{
    //     res.json(data)
    // })
    // .catch(err=>{
    //     res.json({message:err})
    // });
    try {
        const savedPosts = await post.save();
        res.json(savedPosts);
      } catch (err) {
        // res.status(400).send(err);
        res.status(400).json(err);
      }
});

module.exports = router;