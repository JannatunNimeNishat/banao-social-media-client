import { useForm } from "react-hook-form";
import useGetUser from "../../hooks/useGetUser";

const CreatePost = () => {
    const [user] = useGetUser()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const newPost = {user_email: user?.email, post_image:data.image, post_description: data.post_description , total_like:0, total_comments:[]}

        //console.log(newPost);
        fetch('https://banao-social-media-server.vercel.app/add-post',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                reset()
            }
        })
        
    }
    return (
        <div className="min-h-screen min-w-full  flex items-center  ">
            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-10">

                    
                    <div>
                        <label className="label">
                            <span className="label-text">Posts photoURL*</span>

                        </label>
                        <input type="text" className="file-input w-full  mt-1"
                            {...register("image", { required: true })}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write here*</span>

                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder={`What's on your mind, ${user?.name}`}
                            {...register("post_description", { required: true })}
                        ></textarea>

                    </div>

                    <div className="w-full text-center">
                        <input className="mt-5  py-2 w-full bg-yellow-500 text-white font-bold rounded-lg cursor-pointer" type="submit" value="Post" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;