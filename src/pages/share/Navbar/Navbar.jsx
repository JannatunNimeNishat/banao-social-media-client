import { Link, NavLink, useNavigate } from "react-router-dom";
import useGetUser from "../../../hooks/useGetUser";
import { useEffect, useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Navbar = () => {
    // const [user, refetch] = useGetUser()
    const [user, setUser] = useState([])
    // console.log('from navbar', user);
    const navigate = useNavigate()
    const getEmailFromLocal = localStorage.getItem('logged-user');



    useEffect(() => {
        fetch(`https://banao-social-media-server.vercel.app/user/${JSON.parse(getEmailFromLocal)}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                //console.log('from use effect', data);
            })
    }, [getEmailFromLocal])




    const handleLogOut = () => {
        localStorage.removeItem('logged-user')

        navigate('/login')
    }



    const navItems = <>
        {/* <li><NavLink className={({isActive}) => isActive ? 'active' : '' } to ='/'>Home</NavLink></li> */}
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? '' : ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to='#' className={({ isActive }) => isActive ? '' : ''}>About</NavLink>
        </li>
        <li>
            <NavLink to='#' className={({ isActive }) => isActive ? '' : ''}>Contact</NavLink>
        </li>

        {
            user?.email && <li>
                <Link to='/dashboard' >{user?.name}</Link>
            </li>
        }
        {
            user?.email && <li>
                <Link to='/dashboard/createPost' > 
                <AiOutlinePlusSquare/>
                Create Post
                
                </Link>
            </li>
        }



    </>

    return (
        <div className="navbar bg-base-100 my-container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl text-yellow-500">Banano</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <p onClick={handleLogOut} className="btn  text-white bg-yellow-500 font-bold hover:bg-white hover:text-black">
                            Logout</p>
                        :
                        <Link to='/login' className="btn  text-white bg-yellow-500 font-bold hover:bg-white hover:text-black">
                            Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;