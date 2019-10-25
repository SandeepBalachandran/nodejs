const mongoose  = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
});

module.exports = mongoose.model('Posts',PostSchema)


// const GradesSchema = mongoose.Schema({
//     recrd : {
//         type : String
//     },
//     watlev: {
//         type : String
//     }

// }, {collection : 'shipwrecks'});
