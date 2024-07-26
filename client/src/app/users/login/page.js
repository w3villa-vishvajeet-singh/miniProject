"use client"
import { useState } from 'react';
import "../Register/page.css";


function Page() {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
  };

  return (
    <>
      <div className="heading">
        <form onSubmit={handleSubmit}>
          <div className="form">
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
                type="number"
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
