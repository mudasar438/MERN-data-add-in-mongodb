
import "./App.css";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
// import About from "./component/About";
// import Contactus from "./component/Contactus";
// import Belog from "./component/Belog";
// import NoteState from "./component/Context/NoteState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import DetaFeaching from "./component/DetaFeaching";

function App() {
  return (
    <>
 
    <Router>
     
        <Navbar />
    <Routes>
       <Route path="/" element={<Home />} /> 
      
    </Routes>
    </Router>
   
    </>

  );
}

export default App;
