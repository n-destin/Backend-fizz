import mongoose, {Schema} from "mongoose";
import bcrypyt from 'bcryptjs'

const User = new Schema({
    Username: {type: String, required: true},
    Phone: Number,
    Email: String,
    Password: {type: String, unique: true, lowercase: true},
    DateJoined: {type:Date}
}, 

{
    toJSON: {virtuals: true},
    toObject :{virtuals: true}
})
// has the password before saving
User.pre('save', async function(next){
    if(!User.isModified('password')) return next;
    try {
        const salt  = bcrypyt.genSalt(10);
        const hashedPassword = bcrypyt.hash(User.Password, salt);
        User.Password = hashedPassword;
        return next;
        
    } catch (error) {
        console.log(error.message);
    }
})

// compare passowords

User.methods.comparePasswords(password) = async function comparePasswords(password){
    const user = this;
    return bcrypyt.compare(password, user.Password);
}

const UserModel = mongoose.model('User', User);


export default UserModel;