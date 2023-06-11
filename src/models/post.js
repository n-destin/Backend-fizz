import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema({
    UserId : {type: mongoose.Types.ObjectId},
    PostContent : String,
    PostImage: String, // gonna be a link
    DateCrated : {type: Date},
    Comments : {type: [mongoose.Types.ObjectId]}, // contains the ids to the comments makes
    Likes : {type: [mongoose.Types.ObjectId]},  // contains the ID of hte people liking hte comment,
    Upvokes: Number
})


const PostModel = mongoose.model('Post', Post)
export default PostModel;