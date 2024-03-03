import mongoose from "mongoose";//help set up our model
const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        lastName:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            required:true,
            max:50,
            unique: true   //you cannot have duplicate email
        },
        password:{
            type:String,
            require:true,
            min:5,
        },
        picturePath:{
            type:String,
            default:"",  //its not required
        },
        friends:{
            type:Array,
            default:[]
        },
        location:String,
        occupation:String,
        viewProfile:Number,
        impressions:Number,
    },
    {timestamps:true}   //give us automatic time,when its created and all that
);

const User = mongoose.model("User",UserSchema);
export default User;