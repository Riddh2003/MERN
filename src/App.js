import React from 'react';
import './App.css';
import Header from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {

  // var name = 'Riddh'; 
  // var age = 22;
  // var user = {
  //   name : 'Sumit',
  //   salary : 1000000
  // }

  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
