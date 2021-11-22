import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap';
import { Route, Router, Routes, Link } from 'react-router-dom';
import List from './components/list.js';
import Write from './components/write.js';
import Home from './components/home.js';

function App() {
const [data,setData] =useState('data')

const test = async () => {
  const response = await axios.get('http://localhost:5000/text');
  setData(response.data.data)
}



 
  return (
    <div className="App">
  
      <Routes>
        <Route path="/Home"  element={<Home />} />
        <Route path="/write"  element={<Write />} />
        <Route path="/list" element={<List />} />
      </Routes>
 
    </div>
  );
}

export default App;
