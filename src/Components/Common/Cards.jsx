import React, { Component } from 'react'
import Navbar from './Navbar';
import { ReactDOM } from 'react-dom/client';

const Cards = ({name}) => {
    return ( 
        <>
        <div className="py-8 px-8 mb-8 max-w-sm mx-auto bg-crud-gray  shadow-md space-y-5 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png" alt="Contact" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
      Via Sms
            </p>
      <p className="text-slate-500 font-medium">
      ******0000
            </p>
    </div>
  </div>
</div>
{name}
</>
) };

 
export default Cards;