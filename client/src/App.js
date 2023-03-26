// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
import { Routes, Route } from "react-router-dom";
import {initialState, reducer} from "./reducer/UseReducer"    
import {createContext ,useReducer } from "react";
// To gtoggle between login and logout, we will use Context API
export const userContext = createContext();

const Routing = () => {
  return(
    <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/about" element = {<About />}/>
        <Route exact path="/contact" element = {<Contact />}/>
        <Route exact path="/login" element = {<Login />}/>
        <Route exact path="/signup" element = {<Signup />}/>
        <Route exact path="/logout" element = {<Logout />}/>
    
        <Route path="*" element = {<Errorpage />}/>

      </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <userContext.Provider value = {{state, dispatch}}>
      <Navbar />
      <Routing />
    </userContext.Provider>
    </>
  );
}

export default App;
