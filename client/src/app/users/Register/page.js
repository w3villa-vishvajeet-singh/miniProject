"use client";
import { useState } from 'react';
import axios from 'axios';
import "../Register/page.css";

function Page() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  function validateEmail(email) {
    const atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;
    const dot = email.indexOf(".");
    if (dot <= atSymbol + 1) return false;
    if (dot === email.length - 1) return false;
    if (email.indexOf(" ") !== -1) return false;
    return true;
  }

  function validatePassword(password) {
    if (password.length < 8) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
    return true;
  }

  // Mark handleSubmit as async to use await
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, number, password } = formData;

    if (!validateEmail(email)) {
      alert("Email is invalid");
      return;
    }

    if (!validatePassword(password)) {debugger;
      alert("Password is invalid");
      return;
    }

    try {
        const response = await axios.post('http://localhost:8001/register', {
            name: formData.username,
            email: formData.email,
            number: formData.number,
            password: formData.password
        });

        if (response.status === 200) {
            alert(response.data.message);
            setFormData({
                username: '',
                email: '',
                number: '',
                password: ''
            });
        } else {
            alert(response.data.error || 'Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
};

  return (
    <>
      <div className="heading">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form">
            <div className="user_name">
              <label htmlFor="username" className="m-4">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email" className="m-4">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="phone">
              <label htmlFor="number" className="m-4">Number</label>
              <input
                type="text"  // Changed from number to text to handle different phone number formats
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="password">
              <label htmlFor="password" className="m-4">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
