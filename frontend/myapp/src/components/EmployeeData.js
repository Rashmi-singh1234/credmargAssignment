import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List, Message, Segment ,Label} from 'semantic-ui-react';

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
    /*
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
    </div>*/
    <Container>
      <Segment>
        <Header as="h2">Employee Data</Header>
        {error && <Message error content={error} />}
        <List divided relaxed>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <List.Item key={employee.id}>
                <List.Content>
                  <Label size="large">Name:</Label> {employee.name} &nbsp;
                  <Label size="large">Designation</Label> {employee.designation} &nbsp;
                  <Label size="large">CTC</Label> {employee.ctc}
                  <Label size="large">Email</Label> {employee.email}
                </List.Content>
              </List.Item>
            ))
          ) : (
            <List.Item>No employees added</List.Item>
          )}
        </List>
      </Segment>
    </Container>
  );
};

export default EmployeeData;
