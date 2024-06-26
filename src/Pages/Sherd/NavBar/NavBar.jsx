import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { LuShoppingCart } from "react-icons/lu";
import useCarts from "../../../hooks/useCarts";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [carts] = useCarts()
    
    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/secret'}>secret</Link></li>
        <li><Link to={'dashboard/carts'}>
            <button className="btn">
            <LuShoppingCart />

                <div className="badge badge-secondary">+{carts.length}</div>
            </button>
        </Link></li>


        {
            user ? <><button onClick={() => logOut()} className="">Logout</button></> : <><li><Link to={'/login'}>Login</Link></li></>
        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30  bg-black max-w-screen-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">Cafe Rain</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white flex items-center ">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;