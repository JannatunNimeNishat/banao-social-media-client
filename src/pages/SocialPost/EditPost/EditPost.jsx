import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

const EditPost = () => {

    const { id } = useParams()

    const { register, handleSubmit, reset } = useForm();
    const [previousPost, setPreviousPost] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`https://banao-social-media-server.vercel.app/get-a-post/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setPreviousPost(data)
                //console.log('edit ', data);

            })
    }, [id])

    console.log('previous post',previousPost
    );


    const onSubmit = (data) =>{
        
        fetch(`https://banao-social-media-server.vercel.app/update-a-post/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data => {
            setPreviousPost(data)
           // console.log('edit ', data);
            if(data.modifiedCount> 0){
                //reset();
                navigate('/dashboard/allPost')

            }

        })

    }

 


    return (
        <>
        {
            loading === false && <div className="min-h-screen min-w-full  flex items-center  ">
            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-10">


                    <div>
                        <label className="label">
                            <span className="label-text">Posts photoURL*</span>

                        </label>

                      {
                        previousPost !==undefined ? 
                        <>
                          <input type="text" className="file-input w-full  mt-1" defaultValue={`${previousPost.post_image}`} 
                            {...register("image", { required: true })}
                        />
                        </> 
                        :
                        <>
                        
                        </>
                      }

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write here*</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" defaultValue={`${previousPost.post_description}`}
                            {...register("post_description", { required: true })}
                        ></textarea>

                    </div>
                    <div className="w-full text-center">
                        <input className="mt-5  py-2 w-full bg-yellow-500 text-white font-bold rounded-lg cursor-pointer" type="submit" value="Post" />
                    </div>
                </form>
            </div>
        </div>
        }

        </>
    );
};

export default EditPost;