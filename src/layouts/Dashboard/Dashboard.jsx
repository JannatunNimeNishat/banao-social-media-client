import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";

const Dashboard = () => {

    const [user] = useGetUser()
    const navigate = useNavigate()

    const handleLogOut = ()=>{
       
            localStorage.removeItem('logged-user')
    
            navigate('/login')
       
    }
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <h3>Welcome <span className="text-yellow-500 font-semibold">{user?.name}</span></h3>
                    </li>
                    <li>
                        <NavLink to='/dashboard/createPost' className={({ isActive }) => isActive ? 'active1' : ''}>Create Post</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allPost' className={({ isActive }) => isActive ? 'active1' : ''}>All Posts</NavLink>
                    </li>
                    <hr className="h-1 bg-black mt-10" />

                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <p onClick={handleLogOut} >LogOut</p>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;