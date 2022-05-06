import './App.css';
import Home from "./pages/Home";
import AuctionList from "./pages/AuctionList";
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/auctionList' element={< AuctionList />}></Route>
    </Routes>
  </Router>

  );
}

export default App;
