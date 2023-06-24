import { useEffect, useState } from "react";
import useGetUser from "../../../hooks/useGetUser";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
const GetAllPostByUser = () => {
    const [user] = useGetUser()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user-posts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log('from allusers ', data);
            })
    }, [user?.email])

    const total_comment = posts?.reduce((sum,item) => sum + item?.total_comments , 0)


    const handleDelete = (_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/delete-post/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
            .then(data => {
                //setPosts(data)
                console.log('delete ', data);
                if(data.deletedCount> 0){
                    const reamingPosts = posts.filter(post => post._id !== _id);
                    setPosts(reamingPosts);
                    
                }
            })
    }


    return (
        <div className="min-h-screen min-w-full">
            <h3 className="text-2xl font-semibold my-5">Total posts: {posts?.length}</h3>
            <div>
                {/* { */}


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Desc</th>
                                <th>Likes</th>
                                <th>Comments</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                posts.map((post, index) => <tr key={post._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={post?.post_image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <p>{post?.post_description}</p>

                                    </td>
                                    <td>
                                        <p>{post?.total_like}</p>
                                    </td>
                                    <td>
                                        <p>{total_comment}</p>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
                                            <BsTrash onClick={()=> handleDelete(post._id)} className="text-red-500 h-4 w-4"/>
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
                                            <FaRegEdit className="text-green-500 h-4 w-4"/>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
                {/* } */}
            </div>

        </div>
    );
};

export default GetAllPostByUser;