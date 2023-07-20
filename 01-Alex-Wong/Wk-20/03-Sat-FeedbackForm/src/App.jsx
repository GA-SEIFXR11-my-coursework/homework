import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Button } from '@mui/material';

export default function App(){
  return(
    <Form />
  )
}

function Form(){
  // Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Ratings
  const [food, setFood] = useState(0);
  const [service, setService] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  // Comment
  const [comment, setComment] = useState('');

  function handleSubmit(e){
    e.preventDefault(); // Prevent the browser from reloading the page
    // Setup form and read data
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    // clear form
    setName('');
    setEmail('');
    setFood(0);
    setService(0);
    setCleanliness(0);
    setComment('');
  }
  return(
  <Stack
    direction="column"
    component="form"
    spacing={2}
    sx={{ alignItems:'left', margin:'0 auto', marginTop:'10vh', width:'20vw' }}
    onSubmit={handleSubmit}
  >
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">Your Details</Typography>
      <TextField name="name" id="input-name" label="Name" variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}} fullWidth/>
      <TextField name="email" id="input-email" label="Email" variant="outlined" value={email} onChange={(e)=>{setEmail(e.target.value)}} fullWidth/>
    </Stack>
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">Ratings</Typography>
      <Typography component="legend">Food</Typography>
      <Rating name="food" id="input-food" value={food} onChange={(e)=>{setFood(Number(e.target.value))}}/>
      <Typography component="legend">Service</Typography>
      <Rating name="service" id="input-service" value={service} onChange={(e)=>{setService(Number(e.target.value))}}/>
      <Typography component="legend">Cleanliness</Typography>
      <Rating name="cleanliness" id="input-cleanliness" value={cleanliness} onChange={(e)=>{setCleanliness(Number(e.target.value))}}/>
    </Stack>
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">Comments</Typography>
      <TextareaAutosize name="comment" id="input-comment" minRows={7} placeholder="Type your comment" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
    </Stack>
    <Button type="submit">Submit</Button>
  </Stack>
  )
}
