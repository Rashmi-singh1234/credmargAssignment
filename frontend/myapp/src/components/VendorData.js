import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendorData = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vendors/');
        console.log('Fetched vendors:', response.data);
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendor list:', error);
        setError('Failed to fetch vendor');
      }
    };
    fetchVendors();
  }, []);

  return (
    <div>
      <h2>Vendors Data</h2>
      {error && <p>{error}</p>}
      <ul>
        {vendors.length > 0 ? (
          vendors.map((vendor) => (
            <li key={vendor.id}>
              <strong>Name:</strong> {vendor.name} <br />
              <strong>Email:</strong> {vendor.email} <br />
              <strong>Upi:</strong> {vendor.upi} <br />
            </li>
          ))
        ) : (
          <li>No vendors Added</li>
        )}
      </ul>
    </div>
  );
};

export default VendorData;
