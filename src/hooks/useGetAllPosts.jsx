import { useEffect, useState } from "react";


const useGetAllPosts = () => {

    const [allPosts, setAllPosts] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/all-posts')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data)
            })
    }, [])

    return [allPosts]

}

export default useGetAllPosts;