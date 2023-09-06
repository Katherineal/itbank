import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Header from './componentes/header/Header.jsx';
import Transferencias from './transferencias/index.js'
import Home from './home/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/transferencias" element={<Transferencias/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Transferencias/>}/>
        <Route path="/" element={<Transferencias/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
