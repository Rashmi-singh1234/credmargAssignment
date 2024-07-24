import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/employees/');
        console.log('Fetched employees:', response.data);
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employee list:', error);
        setError('Failed to fetch employee');
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div>
      <h2>Employee Data</h2>
      {error && <p>{error}</p>}
      <ul>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <li key={employee.id}>
              <strong>Name:</strong> {employee.name} <br />
              <strong>Designation:</strong> {employee.designation} <br />
              <strong>CTC:</strong> {employee.ctc} <br />
            </li>
          ))
        ) : (
          <li>No employees Added</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeData;
