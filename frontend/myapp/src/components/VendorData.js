import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List, Message, Segment ,Label} from 'semantic-ui-react';

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
    <Container>
      <Segment>
        <Header as="h2">Vendors Data</Header>
        {error && <Message error content={error} />}
        <List divided relaxed>
          {vendors.length > 0 ? (
            vendors.map((vendor) => (
              <List.Item key={vendor.id}>
                <List.Content>
                  <Label size="large">Name</Label> {vendor.name} &nbsp;
                  <Label size="large">Upi</Label> {vendor.upi} &nbsp;
                  <Label size="large">Email</Label> {vendor.email}
                </List.Content>
              </List.Item>
            ))
          ) : (
            <List.Item>No Vendors added</List.Item>
          )}
        </List>
      </Segment>
    </Container>
  );
};

export default VendorData;
