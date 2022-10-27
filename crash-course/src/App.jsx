import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";



function App() {
  return (
    <>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element= {<Home/>}></Route>
          <Route path="/About" element= {<About/>}></Route>
          <Route path="/Contact" element= {<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
