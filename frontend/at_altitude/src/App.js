import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'; 
import BaseRouter from './routes';

function App() {
  return (
    <Router>
      <div className="App">
      <CustomNavbar />
        <BaseRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
