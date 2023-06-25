import { useEffect, useState } from "react";


const useGetAllPosts = () => {

    const [allPosts, setAllPosts] = useState()

    useEffect(() => {
        fetch('https://banao-social-media-server.vercel.app/all-posts')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data)
            })
    }, [])

    return [allPosts]

}

export default useGetAllPosts;