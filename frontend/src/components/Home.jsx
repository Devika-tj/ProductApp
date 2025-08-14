import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
      {products.map((product, index) => (
        <Card key={index} sx={{ maxWidth: 400, marginTop: 2 }}>
          <CardMedia
            sx={{ height: 250 }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.description}
            </Typography>
          </CardContent>
          <p style={{ color: 'black', textAlign: 'justify' }}>Status:</p>
          <p style={{ color: 'green', textAlign: 'justify' }}>Available</p>
          <CardActions>
            <Button variant="contained" style={{ backgroundColor: '#040305ff' }}>Add to Cart</Button>
            <Button variant="contained" style={{ backgroundColor: '#000000ff' }}>Buy Now</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Home;
