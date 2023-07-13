import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

const MyForm = ({sendDataToParent}) => {
  const [companyName, setCompanyName] = useState('');
  const [fullName, setFullName] = useState('');

  // const [data, setData] = useState(null);

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g., submit to server)
    console.log('Company Name:', companyName);
    console.log('Full Name:', fullName);

    fetchData(fullName, companyName);
    // Reset the form fields
    setCompanyName('');
    setFullName('');
  };

  const fetchData = async (fullName, companyName) => {
    try {
      const response = await axios.get(`http://localhost:3000/email?companyName=${companyName}&fullName=${fullName}`)
      .then((response) => sendDataToParent(response))
      .catch((response) => {
        sendDataToParent(response)
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div class="login-box">
      <h2> User Details </h2>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            class="input-data"
            required
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
        <div class="user-box">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            class="input-data"
            required
            value={fullName}
            onChange={handleFullNameChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;