import { useState } from "react";
import useGetAllPosts from "../../hooks/useGetAllPosts";
import Post from "./Post";


const Posts = () => {
    const [allPosts] = useGetAllPosts()
    // console.log('allposts',allPosts);

  /*   const [isLiked, setIsLiked] = useState(false);

    const [initialLike, setInitialLike] = useState() */

    /* const handleAddLike = (_id) =>{
        console.log(_id);
        setIsLiked(true)
      

    } */
    return (
        <div className="w-8/12   mx-auto mt-5 ">
            {
                allPosts?.map(singlePost =><Post 
                    key={singlePost._id}
                    singlePost={singlePost}
                   /*  handleAddLike={handleAddLike}
                    initialLike={initialLike}
                    isLiked={isLiked} */
                    >
                    </Post>)
            }
        </div>
    );
};

export default Posts;