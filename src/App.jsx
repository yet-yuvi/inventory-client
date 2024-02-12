import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'

function MainArea() {
  return(
    <main>
      <h1>Main Area</h1>
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
