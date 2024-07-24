import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiBaseUrl = process.env.API_BASE_URL;

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/employees/add', employeeData);
      alert('Employee added successfully!');
      setEmployeeData({
        name: '',
        designation: '',
        ctc: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Failed to add employee');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const navigate=useNavigate();
  const handleView=()=>{
      navigate('employeedata');
  }
  return (
    <div className="ui main">
    <h1>Add Employee</h1>
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
      <label>Name</label>
      <input type="text" name="name" placeholder="Name" value={employeeData.name} onChange={handleChange} required />
      </div>
      <div className="field">
      <label>Designation</label>
      <input type="text" name="designation" placeholder="Designation" value={employeeData.designation} onChange={handleChange} required />
      </div>
      <div className="field">
      <label>CTC</label>
      <input type="number" name="ctc" placeholder="CTC" value={employeeData.ctc} onChange={handleChange} required />
      </div>
      <div className="field">
      <label>Email</label>
      <input type="email" name="email" placeholder="Email" value={employeeData.email} onChange={handleChange} required />
      </div>
      <button className="ui button blue">Add</button>
      <button className="ui button blue" onClick={handleView}>View</button>
    </form>
    </div>
  );
};

export default EmployeeForm;
