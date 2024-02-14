import React from 'react';
import {Navbar, Footer, Products} from './components';
import './App.css'

function MainArea() {
  return(
    <main>
      <Products />
    </main>
  );
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <MainArea />
      <Footer />  
    </div>
  )

}

export default App
