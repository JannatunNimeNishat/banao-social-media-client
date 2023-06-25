import { FaUserAlt, FaShare } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useState } from "react";
const Post = ({ singlePost }) => {

    console.log(singlePost);

    const { _id, post_description, post_image, total_comments, total_like, user_email } = singlePost;
    const [isLiked, setIsLiked] = useState(false);
    const [initialLike, setInitialLike] = useState(total_like)
    const [initialComments, setInitialComments] = useState(total_comments)


    const handleAddLike = (_id) =>{
        console.log(_id);
        setIsLiked(!isLiked)
        setInitialLike(total_like+1)

        fetch(`https://banao-social-media-server.vercel.app/add-like/${_id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    const handleAddComment = (e) =>{
        e.preventDefault()
        const userComment = e.target.comment.value;
   
        const previousComments = [...initialComments, {userComment}];
       
        setInitialComments(previousComments)


        fetch(`https://banao-social-media-server.vercel.app/add-comment/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({userComment})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

    }
  console.log(initialComments);

    return (
        <>
            <div className=" rounded-xl  bg-slate-100">
                <div className="  flex items-center gap-4 px-3 lg:px-10 pt-8 pb-3  ">
                    {/* img of the user */}

                    <FaUserAlt className="h-10 w-10" />

                    <div>
                        <p>{user_email}</p>
                        <p>25 June at 1:06 AM</p>
                    </div>

                </div>

                <div className="px-3 lg:px-8 pt-4 pb-8">
                    <p className="">{singlePost?.post_description}</p>
                </div>
                <div className=" h-[400px]">
                    <img className=" object-cover  h-full w-full" src={post_image} alt="" />
                </div>

                <div className="px-8 py-3">
                    <div className="py-4">
                        Likes: {initialLike}
                    </div>
                    <hr />
                    <div className="py-3  lg:px-16 flex gap-3 text-center justify-between ">
                        <button >
                            <AiFillHeart onClick={()=>{handleAddLike(_id)}} 
                            className={`h-8 w-8 cursor-pointer  inline ${isLiked ? 'text-red-500 ': ''}`} 
                            
                            /> <span className="">Like</span>
                        </button>
                        <p>
                            <BiComment className="h-8 w-8  inline" /> <span className="">Comments</span>
                        </p>
                        <p>
                            <FaShare className="h-8 w-8  inline" /> <span className="">Share</span>
                        </p>

                    </div>
                    <hr />

                    <form onSubmit={handleAddComment} className=" py-5 flex gap-2 cursor-pointer">
                        
                        <textarea className="w-full" name="comment" id="" cols="30" rows="2"></textarea>
                        <input className="px-3 py-2 bg-yellow-500 text-white font-bold rounded-xl cursor-pointer" type="submit" value="Post" />
                    </form>

                    <div>
                    {
                        initialComments?.map((singleComment) => <>
                        <p className="bg-slate-200 w-3/4 rounded-xl p-3" key={singleComment._id}>
                            {singleComment.userComment}
                        </p>
                        <p className="flex items-center gap-3 ml-3">
                            <small className="cursor-pointer">Like</small>
                            <small className="cursor-pointer">Reply</small>
                            <span>2 m</span>
                        </p>
                        <br />
                        </>)
                    }
                    
                    </div>
                </div>
            </div>
            <br />
            <br />

        </>
    );
};

export default Post;