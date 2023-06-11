import UserModel from "../models/user";
import jwt from 'jwt-simple'

// registering a user
export async function registerUser(Fields){
    const user = await UserModel.findById({Email : Fields.email});
    if(user) throw new Error('the user already exists')
    const newUser = new UserModel;
    Object.keys(Fields).forEach(key=>{
        newUser[key] = Fields[key]
    })
    return await newUser.save();
}




