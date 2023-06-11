import mongoose, {Schema} from "mongoose";

const StatusModes = {
    read: 'read',
    unread: 'unread'
}

const messageSchema = new Schema({
    Sender : {type: [mongoose.Types.ObjectId]},
    Reciever : {type: [mongoose.Types.ObjectId]},
    DateSent : {type: Date}
})


const Message = mongoose.model('Post', Post)
export default Message;