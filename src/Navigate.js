import React, { useState } from 'react';

const Navigate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };

    // Validation name field
    if (!formData.name) {
      updatedErrors.name = 'Name is required';
      isValid = false;
    } else {
      updatedErrors.name = '';
    }

    // Validation email field
    if (!formData.email) {
      updatedErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      updatedErrors.email = '';
    }

    // Validation email Password
    if (!formData.password) {
      updatedErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      updatedErrors.password = 'Password must be at least six characters long.';
      isValid = false;
    } else {
      updatedErrors.password = '';
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedData(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className='sty'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
  
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
  
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
  
        <button type="submit">Submit</button>
      </form>
  
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Navigate;
