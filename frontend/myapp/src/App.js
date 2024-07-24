
import './App.css';
import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailForm from './components/EmailForm';
import EmailHistory from './components/EmailHistory';
import Header from './components/Header';

function App(){
  return (
    
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
    </div>
  );
}

export default App;
