import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import Navbar from './Components/Common/Navbar';
import Cards from './Components/Common/Cards';
import Signup from './Components/Signup';
import Todolist from './Components/Todolist';
import Delegate from './Components/Delegate';
import Importance from './Components/Importance';
import Passwordreset from './Components/Passwordreset';


function App() {
  return (
    <div className="App">
      woman
      <Navbar />
      <Cards /> 
       <Signup />
      <Todolist/>
      {/* <Importance/>
      <Delegate/>
      <Passwordreset/>  */}
  </div>
  );
}

export default App;
