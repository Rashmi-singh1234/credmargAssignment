
import './App.css';
import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import EmailHistory from './components/EmailHistory';
import EmployeeData from './components/EmployeeData';
import VendorData from './components/VendorData';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
          <Header/>
          <div className="ui stackable grid">
            <div className="eight wide column">
              <EmployeeForm />
            </div>
            <div className="eight wide column">
              <VendorForm />
            </div>
          </div>
        
            <EmailForm />
        </div>
        } />
        <Route 
          path="/employeedata" 
          element={
              <EmployeeData />
          } 
        />
        <Route 
          path="/vendordata" 
          element={
              <VendorData/>
          } 
        />
        <Route 
          path="/mailhistory" 
          element={
          <div className="ui segment">
          <EmailHistory />
        </div>
              
          } 
        />
      </Routes>
    </Router>
    /*
    <div className="ui container">
      <Header/>
      <div className="ui stackable grid">
        <div className="eight wide column">
          <EmployeeForm />
        </div>
        <div className="eight wide column">
          <VendorForm />
        </div>
      </div>
    
        <EmailForm />
    
      <div className="ui segment">
        <EmailHistory />
      </div>
    </div>*/
  );
}

export default App;
