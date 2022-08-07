import React, { Component } from 'react'

class Passwordreset extends Component {
    render() { 
        return (
            <div>  
            <div className=" py-12 pt-3 bg-white h-[400px] items-center  justify-center w-[80%] bg-center ml-10 shadow-md">
            <h1 className='  pt-2 text-lg text-black h-10 text-bold'>Enter 4-digit recovery Code</h1>
                <p>Enter the code sent on your
                   <p>phone/Email to recover your</p> 
                    <p>password. </p>
                    please Enter the code...</p>
                <div className="flex justify-between pt-3 ml-24 text-black bg-#D9D9D9 drop-shadow-sm ">
                    <p><input type="checkbox" /></p>
                    <p><input type="checkbox" /></p>
                    <p><input type="checkbox" /></p>
                    <p><input type="checkbox" /></p>

                    </div>
                </div>
                </div>
        );
    }
}
 
export default Passwordreset;


