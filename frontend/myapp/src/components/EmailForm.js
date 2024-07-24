import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, TextArea, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const apiBaseUrl = process.env.API_BASE_URL;

const EmailForm = () => {
  const [recipientEmails, setRecipientEmails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emails = recipientEmails.split(',').map(email => email.trim());
      await axios.post('http://localhost:8080/api/vendors/sendemail', emails);
      alert('Email sent successfully!');
      setRecipientEmails('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };
   
  const navigate=useNavigate();
  const handleView=()=>{
      navigate('mailhistory');
  }

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
        <button className="ui button blue" onClick={handleView}>View Mail History</button>
      </Form>
    </Segment>
  );
};

export default EmailForm;
