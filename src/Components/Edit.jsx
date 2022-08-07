import React, {Component} from "react";
import Buttons from "./Common/Buttons";
import { Link } from "react-router-dom";
import Sidebar from "./Common/Sidebar";
import { RiArrowDropDownFill } from "react-icons/ri";

class Edit extends Component {
  state = {
    editing: false,
  }
edit(title){
  console.log(title)
}

  onSubmit(e) {
    const edit ={
      title: this.title.value,
      description: this.description.value
    }
    this.title(edit);
    e.preventDefault();
  };
  
  
  render(
    handleEditing=() =>{
this.setState({
editing : true,
})   
 }
  ) { 
    return (
      <div className="flex">
      <div className="flex-justify-between">
        {" "}
        <Sidebar />{" "}
      </div>
      <div className=" py-8 bg-white h-[400px]  w-[70%]  shadow-md">
        <div className="col-12">
        <div className= "{styles.item}">
          <div  onClick={this.handleEditing} className=" text-left ml-24 pt-3 font-bold">Title</div>
          <form onSubmit={this.onSubmit.bind(this)}>
          <input text="text"
            className="{styles.textInput}  bg-light outline-none text-black w-[85%] h-10 pt-center "
            placeholder="Add Title"
          />
          <div className="  text-left ml-24 pt-3 font-bold">Description </div>
          <input
            className=" bg-light outline-none text-black w-[85%] h-10 pt-center "
            placeholder="Important"
          /> <RiArrowDropDownFill className="ml-[750px] "/>
          <div className="pt-5 ml-80">
          <Link to='/'> 
          <Buttons name='Submit/Add'/> 
          </Link>
          </div>
          </form>
          </div>
        </div>
      </div>
    </div>

    );
  }
}
 
export default Edit;
