import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailHistory = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('/api/emails');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
    fetchEmails();
  }, []);

  return (
    <div>
      <h2>Email History</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailHistory;
