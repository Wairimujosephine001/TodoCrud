import React, { Component } from "react";
import Buttons from "./Common/Buttons";
import { Link } from "react-router-dom";


class signup extends Component {
  render() {
    return (
      <div className="container app-wrapper ">
        <div className=" py-12 pt-3 bg-white h-[400px]  w-[55%] bg-center ml-10 shadow-md">
          <h1 className="  pt-2 text-lg text-black h-10 text-bold">
            Create your Account
          </h1>
          <div className=" flex-start text-left  ml-24 pt-3 font-bold ">
            Username
          </div>
          <input
            className=" bg-light outline-none text-black w-[80%] ml-4 h-10 "
            placeholder="Enter your Name"
          />
          <div className=" flex-start text-left ml-24 pt-3 font-bold">
            Email Address
          </div>
          <input
            className=" bg-light outline-none text-black w-[80%] ml-4 h-10 "
            placeholder="Enter your Email"
          />
          <div className=" flex-start text-left ml-24 pt-3 font-bold">
            Enter your Password
          </div>
          <input
            className=" bg-light outline-none text-black w-[80%] ml-4 h-10"
            placeholder="Enter your Password"
          />
          <div className="flex justify-between pt-3 ml-24 text-black bg-#D9D9D9 drop-shadow-sm ">
            <p>
              <input type="checkbox" /> Accept terms and Conditions?
            </p>{" "}
          </div>
          <div className="pt-5">
          <Link to='/'> 
          <Buttons name='SIGN UP'/> 
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
