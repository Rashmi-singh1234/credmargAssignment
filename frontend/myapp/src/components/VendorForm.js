import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VendorForm = () => {
  const [vendorData, setVendorData] = useState({
    name: '',
    email: '',
    upi: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/vendors/add', vendorData);
      alert('Vendor added successfully!');
      setVendorData({
        name: '',
        email: '',
        upi: ''
      });
    } catch (error) {
      console.error('Error adding vendor:', error);
      alert('Failed to add vendor');
    }
  };
  
  const navigate=useNavigate();
  const handleView=()=>{
      navigate('vendordata');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="ui main">
      <h1>Add Vendor</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" value={vendorData.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" value={vendorData.email} onChange={handleChange} required />
        </div>
        <div className="field">
          <label>UPI</label>
          <input type="text" name="upi" placeholder="UPI" value={vendorData.upi} onChange={handleChange} required />
        </div>
        <button className="ui button blue" type="submit">Add</button>
        <button className="ui button blue" onClick={handleView}>View Vendors</button>
      </form>
    </div>
  );
};

export default VendorForm;
