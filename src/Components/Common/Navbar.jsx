import React from 'react'
import { Link } from "react-router-dom";
import Buttons from './Buttons';

const Navbar = ({name}) => {
    return ( 
<nav className="flex items-center justify-between flex-wrap bg-crud-gray p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-bold text-xl text-black">TODOlist</span>
  </div>
  <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
    <div className=" lg:flex-grow">
      <Link to='/signin' className=" mt-4 text-lg text-black  mr-4">
        Add
      </Link>
    </div>
    <div>
    <Link to='/signup'> 
    <Buttons name='LOG OUT'/> 
    </Link>
    </div>
  </div>
</nav>
     );
}
 
export default Navbar;