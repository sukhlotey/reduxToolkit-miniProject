import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Display from "./compos/Display";
import Home from "./compos/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./compos/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/display" element={<Display/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
