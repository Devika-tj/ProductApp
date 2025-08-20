import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  let token=localStorage.getItem('token')


  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  const handleDelete = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(`http://localhost:5000/products/delete/${id}`);
      setProducts(prevproducts => prevproducts.filter(product => product._id !== id));
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  };
  const updateproduct = (product) => {
    navigate('/add', { state: { product } }); 
  };
=======
      await axios.delete(`http://localhost:3000/products/delete/${id}`);
      setProducts(prevproducts => prevproducts.filter(product => product._id !== id));
    } catch (err) {
      console.error('Failed to delete blog:', err);
    }
  };
>>>>>>> 33d1279b0e11cf04a788b1abfdaf908c2a0467da


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
            <Typography variant="body2" sx={{ color: 'black', textAlign: 'justify' }}>Status:</Typography>
            <Typography variant="body2" sx={{color: product.status === 'unavailable' ? 'red' : 'green', textAlign: 'justify'
  }}
>
  {product.status === 'unavailable' ? 'Unavailable' : 'Available'}
</Typography>

          </CardContent>
          
          <CardActions>
            <Button variant="contained" style={{ backgroundColor: '#040305ff' }}>Add to Cart</Button>
            <Button variant="contained" style={{ backgroundColor: '#000000ff' }}>Buy Now</Button>
<<<<<<< HEAD
              {token &&(
              <>
            <Button size="small" onClick={() => updateproduct(product)}>Update</Button>
            
            <Button size="small" onClick={() => handleDelete(product._id)}>Delete</Button>
             </>
          )}
=======
            <Button size="small" onClick={() => handleDelete(blog._id)}>Delete</Button>
>>>>>>> 33d1279b0e11cf04a788b1abfdaf908c2a0467da
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Home;
