import PostModel from "../models/post";

export async function createPost(Fields){
    const Post = new PostModel();
    Object.keys(Fields).forEach(key=>{
        Post[key] = Fields[key];
    })
}

export async function getPost(id){
    const post = await PostModel.findById(id);
    return  post;
}
    
export async function deletePost(id){
    const Post = PostModel.findById(id);
    if(!Post) throw new Error('There is no such Post')
    PostModel.findByIdAndDelete(id);
}


export async function EditPost(id, EditedFields ){
    const toEdit = PostModel.findById(id);
    Object.keys(EditedFields).forEach(key=>{
        toEdit[key] = EditedFields[key];
    })
}

export async function getPosts(){
    const posts =  await PostModel.find();
    return posts;
}



