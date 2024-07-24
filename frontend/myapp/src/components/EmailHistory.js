import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List, Message, Segment ,Label} from 'semantic-ui-react';

const EmailHistory = () => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/emails/findemails');
        console.log('Fetched emails:', response.data);
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
        setError('Failed to fetch emails');
      }
    };
    fetchEmails();
  }, []);

  return (
    <Container>
      <Segment>
        <Header as='h2'>Email History</Header>
        {error && <Message error content={error} />}
        <List divided relaxed>
          {emails.length > 0 ? (
            emails.map((email) => (
              <List.Item key={email.id}>
                <List.Content>
                  <List.Header>Recipient: {email.recipient}</List.Header>
                  <List.Description>
                    <strong>Subject:</strong> {email.subject} <br />
                    <strong>Body:</strong> {email.body} <br />
                    <strong>Sent At:</strong> {new Date(email.sentAt).toLocaleString()}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))
          ) : (
            <List.Item>No emails found</List.Item>
          )}
        </List>
      </Segment>
    </Container>
  );
};

export default EmailHistory;
