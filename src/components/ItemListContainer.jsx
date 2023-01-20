import { Box, Button, CardActionArea, CardActions, Grid, CardContent, Typography } from '@mui/material';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams, useNavigate, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { Container, CardMedia } from "@mui/material";

const Catalogo = ({ productos }) => {

  const { category } = useParams();
  const urlActual = useLocation().pathname.split("/")[1];
  let filtraCat =  productos.products.filter((producto) => producto.category == category )
  let categorias = filtraCat=='' ? filtraCat = productos.products : filtraCat

  
    return (
      <>
    {categorias.map(({ title, description, category, thumbnail, id, price, brand }) => (    
    <ItemDetailContainer key={title} title={title} description={description} category={category} thumbnail={thumbnail} id={id} price={price} brand={brand} />
        ))}
        </>
        )
        
}
export default Catalogo;




