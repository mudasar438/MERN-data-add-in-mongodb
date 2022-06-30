
import "./App.css";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
// import About from "./component/About";
// import Contactus from "./component/Contactus";
// import Belog from "./component/Belog";
// import NoteState from "./component/Context/NoteState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alluser from "./component/alluser";
import EditUser from "./component/editUser";
// import DetaFeaching from "./component/DetaFeaching";

function App() {
  return (
    <>
 
    <Router>
     
        <Navbar />
    <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/alluser" element={<Alluser />} />
       <Route path="/edit/:id" element={<EditUser />} />
      
    </Routes>
    </Router>
   
    </>

  );
}

export default App;
