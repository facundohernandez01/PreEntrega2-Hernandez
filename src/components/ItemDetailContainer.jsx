import { useLocation, useParams } from "react-router-dom";
import { Box, Button, CardActionArea, CardActions, Grid, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";


const ItemDetailContainer = ({ title, description, category, thumbnail, id, price, brand }) => {
  return (
<Grid key={title} item xs={12} md={3}>
              <Card>
                <CardActionArea>
                    <CardMedia  style={{display: "inline"}}
                        component="img"
                        height="140"
                        sx={{ width: 250, height: 180 }}
                        image={thumbnail}
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{overflow: "hidden", height:"25px"}}>
                        {title}
                          </Typography>
                        <Typography  variant="body2" color="text.secondary" style={{overflow: "hidden", height:"20px"}}>
                        {brand}
                        </Typography>
                        <Typography variant="button" display="block" gutterBottom>
                          $ {price}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>


            <Link to={`/productos/${id}`}>
            <Button  variant="contained"> Ver</Button>
            </Link>
            <Button  variant="button"> Add to Cart</Button>

                </CardActions>
            </Card>
    
            </Grid>
  );
};

export default ItemDetailContainer;


