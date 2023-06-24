import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const useGetUser = () => {

    /*   const getEmailFromLocal = localStorage.getItem('logged-user');
      
     console.log(JSON.parse(getEmailFromLocal));
      const {data: user , refetch} = useQuery({
          queryKey:['user', getEmailFromLocal],
          enabled: !!getEmailFromLocal,
          queryFn: async () =>{
            const res =  await fetch(`http://localhost:5000/user/${JSON.parse(getEmailFromLocal)}`)
            const data = res.json()
            return data;
              
          }
      }) */
    // return [user,refetch];


    const [user, setUser] = useState([])
    const [loading,setLoading] = useState(true)
    // console.log('from navbar', user);
 
    const getEmailFromLocal = localStorage.getItem('logged-user');



    useEffect(() => {
        fetch(`http://localhost:5000/user/${JSON.parse(getEmailFromLocal)}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log('from getUser hook', data);
            })
    }, [getEmailFromLocal])

    return [user]
}

export default useGetUser;