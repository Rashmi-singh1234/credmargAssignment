import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, TextArea, Segment } from 'semantic-ui-react';

const EmailForm = () => {
  const [recipientEmails, setRecipientEmails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emails = recipientEmails.split(',').map(email => email.trim());
      await axios.post('/api/emails/send-email', emails);
      alert('Email sent successfully!');
      setRecipientEmails('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  const handleChange = (e) => {
    setRecipientEmails(e.target.value);
  };

  return (
    <Segment>
      <h2>Send Email</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Recipients</label>
          <TextArea
            placeholder="Enter recipient emails separated by commas"
            value={recipientEmails}
            onChange={handleChange}
            required
            rows={4} // Adjust the number of visible rows
          />
        </Form.Field>
        <Button type="submit" primary>Send Email</Button>
      </Form>
    </Segment>
  );
};

export default EmailForm;
