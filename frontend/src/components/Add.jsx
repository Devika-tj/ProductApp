import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axiosinstance from '../axiointercept';

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    image: ''
  });

  useEffect(() => {
    if (location.state?.product) {
      setFormData({
        title: location.state.product.title,
        description: location.state.product.description,
        image: location.state.product.image,
        status:location.state.product.status
      });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.state?.product?._id) {
    
      axiosinstance.put(`http://localhost:5000/products/update/${location.state.product._id}`, formData)
        .then((res) => {
          console.log("Products updated:", res.data);
          alert("Products updated successfully!");
          navigate('/');
        })
        .catch((err) => {
          console.error(err);
          alert("Error updating blog");
        });
    } else {
      
      axiosinstance.post('http://localhost:5000/products/add', formData)
        .then((res) => {
          console.log("Products added:", res.data);
          alert("Product added successfully!");
          setFormData({ title: '', description: '', image: '',status:"" });
        })
        .catch((err) => {
          console.error(err);
          alert("Error adding Products");
        });
    }
  };

  
  // const handleChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value });
  // };

 
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios.post('http://localhost:5000/products/add', formData)
  //     .then((res) => {
  //       console.log("Product added:", res.data);
  //       alert("Product added successfully!");

  //       setFormData({
  //         title: '',
  //         description: '',
  //         status: '',
  //         image: ''
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert("Error adding product");
  //     });
  // };

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
        <Button type="submit" variant="contained" style={{ backgroundColor: '#180858ff' }}>
          {location.state?.product ? 'UPDATE PRODUCT' : 'ADD PRODUCT'}
        </Button>
      </Box>
    </div>
  );
};

export default Add;
