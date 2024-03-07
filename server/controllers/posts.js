import Post from "../models/Post.js";
// Create
 export const CreatePost = async(req,res)=>{
    try{
     const {userId,description,picturePath} = req.body;
     const user = await User.findbyId(userId);
     const newPost = new Post({
        userId,
        firstName:user.firstName,
        lastName:user.lastName,
        location:user.location,
        description,
        userPicturePath:user.picturePath,
        picturePath,
        likes:{},
        comments:[]
     })
     await newPost.save();
     
    }
    catch(err){
        res.status(409).json({message:err.message})
    }
 }