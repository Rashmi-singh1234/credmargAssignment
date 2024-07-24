import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Email History</h2>
      {error && <p>{error}</p>}
      <ul>
        {emails.length > 0 ? (
          emails.map((email) => (
            <li key={email.id}>
              <strong>Recipient:</strong> {email.recipient} <br />
              <strong>Subject:</strong> {email.subject} <br />
              <strong>Body:</strong> {email.body} <br />
              <strong>Sent At:</strong> {new Date(email.sentAt).toLocaleString()}
            </li>
          ))
        ) : (
          <li>No emails found</li>
        )}
      </ul>
    </div>
  );
};

export default EmailHistory;
