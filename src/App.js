import './App.css';
import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
            <Route exact path='/' element={< Home />}></Route>
    </Routes>
  </Router>

  );
}

export default App;
