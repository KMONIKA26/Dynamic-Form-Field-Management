import React, { useState } from 'react';

function App() {
  const [emails, setEmails] = useState(['']);
  const [errors, setErrors] = useState(['']);

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);

    validateEmail(index, value);
  };

  const validateEmail = (index, value) => {
    const updatedErrors = [...errors];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === '') {
      updatedErrors[index] = 'Email is required';
    } else if (!emailRegex.test(value)) {
      updatedErrors[index] = 'Invalid email format';
    } else {
      updatedErrors[index] = '';
    }

    setErrors(updatedErrors);
  };

  const addEmailField = () => {
    setEmails([...emails, '']);
    setErrors([...errors, '']);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Dynamic Email Fields</h2>
      <form>
        {emails.map((email, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              style={{ width: '100%', padding: '0.5rem' }}
            />
            {errors[index] && (
              <p style={{ color: 'red', margin: 0 }}>{errors[index]}</p>
            )}
          </div>
        ))}
        <button type="button" onClick={addEmailField}>
          Add Email
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Entered Emails:</h3>
        <ul>
          {emails.map((email, index) =>
            email.trim() && !errors[index] ? (
              <li key={index}>{email}</li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
