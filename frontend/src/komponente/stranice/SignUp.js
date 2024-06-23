import { useState } from 'react';
import React from 'react';
import '../../App.css';
import '../SignUp.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [users, setUsers] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { email, firstName, lastName };
      setUsers([...users, newUser]);
      setEmail('');
      setFirstName('');
      setLastName('');
    };
  
    return (
      <div className='sign-up-container'>
        <div className='form-container'>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Email:</span>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Ime:</span>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Prezime:</span>
              <input
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className='status-container'>
          <h2>PRIJAVLJENI</h2>
          <table>
            <thead>
              <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td><span>{user.firstName}</span></td>
                  <td><span>{user.lastName}</span></td>
                  <td><span>{user.email}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
