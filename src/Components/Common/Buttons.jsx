import React from 'react'

  const Buttons = ({name, style, onClick}) => {

  
  return (
    <button onClick={onClick} style={style} className=" w-[100px] h-10 bg-crud-blue text-white rounded-[5px] ...">
    {name}
    </button>
    
  )
  }

export default Buttons;