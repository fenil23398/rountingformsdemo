import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import Header from './compoents/Header/index';
import MainFile from './compoents/Mainfile/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//Browser Router Wrapped around whole app routing so that routing is included in whole file
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <MainFile />
        </div>
    </BrowserRouter>

  );
}

export default App;
