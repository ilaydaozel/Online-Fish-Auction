import './App.css';
import Home from "./pages/Home";
import AuctionList from "./pages/AuctionList";
import AuctionFishTable from './pages/AuctionFishTable';
import Auction from './pages/Auction';
import AddFish from './pages/Addfish';
import Login from "./pages/Login";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={localStorage.getItem("currentUser") != null ? <Home /> : <Navigate to="/login" />}></Route>
        <Route exact path='/auctionList' element={localStorage.getItem("currentUser") != null ? <AuctionList /> : <Navigate to="/login" />}></Route>
        <Route exact path='/fishList/:auctionId' element={localStorage.getItem("currentUser") != null ? <AuctionFishTable /> : <Navigate to="/login" />}></Route>
        <Route exact path='/auction/:auctionId' element={localStorage.getItem("currentUser") != null ? <Auction /> : <Navigate to="/login" />}></Route>
        <Route exact path='/login'
          element={localStorage.getItem("currentUser") != null ? <Navigate to="/" /> : <Login />}>
        </Route>
        <Route exact path='/addFish' element={< AddFish />}></Route>
      </Routes>
    </Router>

  );
}

export default App;