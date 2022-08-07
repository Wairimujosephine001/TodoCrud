import React from 'react'

function Sidebar() {
  return (

  <div className="bg-crud-gray h-[650px] mr-10 w-72 block shadow-md">
    <ul className='space-y-14 pt-4 outline-none float-left hoverlist-style-none '>
    <li><a className='py-8  '>All todos</a></li>
    <li><a className='py-2 text-black space-y-4 '>Important</a></li>
    <li><a className='py-2 text-black'>Urgent but not Important</a></li>
    <li><a className='py-2 text-black'>Delegate</a></li>
    </ul>
  </div>
  
    
  )
};
export default Sidebar;