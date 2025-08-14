import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Add = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    image: ''
  });

  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/products/add', formData)
      .then((res) => {
        console.log("Product added:", res.data);
        alert("Product added successfully!");

        setFormData({
          title: '',
          description: '',
          status: '',
          image: ''
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding product");
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'serif', fontStyle: 'oblique' }}>ADD PRODUCTS</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit} 
      >
        <TextField name="title" label="Title" variant="outlined" value={formData.title} onChange={handleChange} />
        <br />
        <TextField name="description" label="Description" variant="outlined" value={formData.description} onChange={handleChange}
        />
        <br />
        <TextField name="status" label="Status" variant="outlined"  value={formData.status} onChange={handleChange}
        />
        <br />
        <TextField name="image" label="Image URL" variant="outlined" value={formData.image} onChange={handleChange}
        />
        <br />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#541f77ff' }}>
          ADD PRODUCT
        </Button>
      </Box>
    </div>
  );
};

export default Add;
