/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import songs from "./assets/songs.js";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const AudioUrlContext = React.createContext();

export default function App(){
  return(
    <Box sx={{m: "0 auto", width: "50%"}}>
      <SongDeck />
    </Box>
  )
}

function SongCard({props}){
  const {song, currentSong, setCurrentSong} = props;
  function handleClick(){
    setCurrentSong(song)
  }
  return(
    <CardActionArea onClick={ ()=>{handleClick()} }>
      <Card sx={{ display: 'flex', m: 1, justifyContent: "space-between"}}>
        <CardMedia
          component="img"
          sx={{ width: 128 }}
          image={song.albumArt}
          alt={`${song.title} album cover`}
          />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">{song.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">{song.artist}</Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', m: 1}}>
          {
            (song.key !== currentSong.key)
            ? <PlayArrowIcon sx={{ h: 38, w: 38 }} />
            : <PauseIcon sx={{ h: 38, w: 38 }} />
          }
        </Box>
      </Card>
    </CardActionArea>
  )
}

function SongDeck(){
  const [currentSong, setCurrentSong] = React.useState({});

  const cards = songs.map((val,index)=>{
    const key = `song-${index}`;
    const songCardProps = {
      song: {...val, key},
      currentSong,
      setCurrentSong
    }
    return <SongCard key={key} props={songCardProps}/>
  })

  const mediaPlayerProps = { currentSong };
  return(
    <div className="song-deck">
      {cards}
      <MediaPlayer props={mediaPlayerProps}/>
    </div>
  )
}

function MediaPlayer({props}){
  const {currentSong} = props;

  function Render(){
    return(
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: "center" }}>
      <Typography component="div" variant="h5">Playing: </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
        <CardMedia
          component="img"
          sx={{ width: 128 }}
          image={currentSong.albumArt}
          alt={`${currentSong.title} album cover`}
        />
        <Typography component="div" variant="h5">{currentSong.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">{currentSong.artist}</Typography>
      </Box>
      <audio controls src={currentSong.url}></audio>
  </Card>
    )
  }

  return(
  <>
    {currentSong.key && <Render />}
  </>
  )
}
