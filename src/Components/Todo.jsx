import React, { Component }  from "react";
import Sidebar from "./Common/Sidebar";
import { VscHeart, VscTrash } from "react-icons/vsc";
import { RiEditBoxLine } from "react-icons/ri";
import { AiFillCheckSquare } from "react-icons/ai";
import Buttons from "./Common/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";


class Todo extends Component {
  state = { 
    todos : [] 
   };
   
   
   async componentDidMount() { 
     const {data :todos} = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=11")
     this.setState({todos})
   };

    handleDelete=async todoId=>{
      const originalTodos= this.state.todos
     const todos= originalTodos.filter(todo=>todo.id !==todoId.id);
     this.setState({todos})
     try {
       await axios.delete("https://jsonplaceholder.typicode.com/todos?_limit=11", +todoId.id, todoId) 
     } catch (error) {
       this.setState({todos: originalTodos})
     }

   };

  render()  {
    return (
      <div className="flex">
        <Sidebar />
        <div className="  bg-white w-full  mt-10">
          <table className="h-fit w-full ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Like</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {this.state.todos.map(todo=>(
              <tr key={todo.id} onDelete={this.handleDelete} className="border-4 rounded border-white bg-crud-gray ">
              <td className="float-left ml-6 p-1">{todo.title}</td>
              <td>{todo.id}</td>
              <td>
                <VscHeart />
              </td>
              <td className="flex">
                <AiFillCheckSquare size={15}/>
                <VscTrash onClick={()=>this.props.onDelete(this.props.id)} size={15} />
                <Link to="/edit">
                  <RiEditBoxLine size={15} />
                </Link>
              </td>
            </tr>
            ))}          
            </tbody>
          </table>
          <div>
            <Buttons style={{ marginTop: 50 }} name="Remove All" />
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;