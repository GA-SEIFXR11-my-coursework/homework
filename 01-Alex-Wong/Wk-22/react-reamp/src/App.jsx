/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import songs from "./assets/songs.js";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function App(){


  return(
    <>
    <SongDeck />
    </>
  )
}

function SongCard({props}){
  const {title, artist, url, albumArt} = props;
  return(
    <Card sx={{ display: 'flex', width: "50%", m: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 128 }}
        image={albumArt}
        alt={`${title} album cover`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">{title}</Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">{artist}</Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

function SongDeck(){
  const cards = songs.map((val,index)=>{
    return <SongCard key={`song-${index}`} props={val}/>
  })
  return(
    <div className="song-deck">
      {cards}
    </div>
  )
}
