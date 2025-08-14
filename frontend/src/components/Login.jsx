import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  function capValue(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/user/login", form)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === 'login successful') {
          navigate('/blogs');
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid credentials or server error");
        navigate('/');
      });
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'serif', fontStyle: 'oblique' }}>LOGIN</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          label="Username"
          variant="outlined"
        />
        <br />
        <TextField
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          label="Password"
          variant="outlined"
        />
        <br />
        <Button onClick={capValue} variant="contained" style={{ backgroundColor: '#543377ff' }}>
          LOGIN
        </Button>
      </Box>
    </div>
  );
};

export default Login;
