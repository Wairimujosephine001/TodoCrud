import React from 'react'
import Buttons from './Common/Buttons'

function Reset() {
  return (
    <div>
        <div className=" bg-white h-[300px]  w-[80%] ml-10 shadow-md">
            <h1 className='font-bold text-xl pt-2'>Password reset<br/> succesful</h1>
            <p className=' text-center pt-5'>You have successful set your Password.<br/>
Please use the new password in<br/> 
Sign-in </p>
<div className='  ml-80 pt-4'>
<Buttons name="sign in " />

</div>


        </div>
    </div>
  )
}

export default Reset;