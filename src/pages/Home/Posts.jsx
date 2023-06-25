
import useGetAllPosts from "../../hooks/useGetAllPosts";
import Post from "./Post";


const Posts = () => {
    const [allPosts] = useGetAllPosts()

    return (
        <div className=" px-4 lg:px-0 lg:w-8/12   mx-auto mt-5 ">
            {
                allPosts?.map(singlePost => <Post
                    key={singlePost._id}
                    singlePost={singlePost}

                >
                </Post>)
            }
        </div>
    );
};

export default Posts;