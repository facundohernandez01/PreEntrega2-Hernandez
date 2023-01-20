import { useParams, useNavigate, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({ products: [] })
  
  useEffect(() => {
  fetch(`https://dummyjson.com/products/${id}`)
  .then((response) => response.json())
  .then((json) => setProducto(json))
  },[id])  



  return (
    
  <div>
       <h1>{producto.title}</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
          <img
      src={producto.thumbnail}

      />
          </Item>
        </Grid>
        <Grid item xs={4} 
        align='left'
        >
          <Item>
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <h2>$ {producto.price}</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          > 
              <TextField
          id="outlined-number"
          label="Cantidad"
          value="1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    <Item>
    <Button variant="contained">Añadir al carrito</Button>
    <Button onClick={() => navigate(-1)} variant="contained" color="secondary">← Volver</Button>
    </Item>

    </Box>
          </Item>


        </Grid>
      </Grid>
    </Box>

  </div>
  );
};

export default ItemDetail;










