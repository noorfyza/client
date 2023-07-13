import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyForm from './MyForm';
import './App.css';

const MyComponent = () => {
  const [data, setData] = useState({email: ''});

  const handleDataFromChild = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <div class="login-box">
      <MyForm sendDataToParent={handleDataFromChild} />
      <div>{data?.response?.status == 400 ? <label><div class="response"> Company Pattern not found. </div></label> : <label><div class="response">Your email ID is : {data?.data?.email}</div></label>}</div>
    </div>
  );
};

export default MyComponent;