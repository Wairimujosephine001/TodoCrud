import React, { Component } from 'react'
import Cards from './Common/Cards';

class Password extends Component {
    render() { 
        return (
            <div>  
            <div className=" py-18 pt-15 bg-white h-[400px] items-center  justify-center w-[80%] bg-center ml-14 shadow-md">
            <h1 className='  pt-6 text-lg text-black h-[50px] text-bold'>Forgot Password </h1>
            <div>
            <Cards  name=''/> 
            <Cards  name=''/> 
            </div>
                </div>
                </div>
        );
    }
}
 
export default Password;
