import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Biden from './Biden';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 , m : 20}}>
      <CardActionArea>
        <CardMedia> 
          <Biden/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Titlu
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Subtitlu
        </Typography>
          <Typography variant="body2" color="text.secondary">
           Description about ... :
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}