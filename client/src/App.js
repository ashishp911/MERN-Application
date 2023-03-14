// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Errorpage from "./components/Errorpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <TestNavbar /> */}
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/about" element = {<About />}/>
        <Route exact path="/contact" element = {<Contact />}/>
        <Route exact path="/login" element = {<Login />}/>
        <Route exact path="/signup" element = {<Signup />}/>
        <Route  path="*" element = {<Errorpage />}/>

      </Routes>
    </>
  );
}

export default App;
