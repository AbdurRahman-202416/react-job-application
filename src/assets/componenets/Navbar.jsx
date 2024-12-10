import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";
import { useContext } from "react";
import { love } from "../../App";
const Navbar = () => {
  const value= useContext(love)
  const LinkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-indigo-500 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2"
      : "text-white  hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 ";

  return (
    <div>
      <nav className="bg-gray-900 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React JobHub
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={LinkClass}>
                    Home
                  </NavLink>
                  <NavLink to="Jobs" className={LinkClass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={LinkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex  text-indigo-100 ">
              <i class="fa-solid fa-heart text-pink-700 m-2 text-3xl"></i>
              <p className="text-2xl mt-2">{ value.totalLove.length}</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
