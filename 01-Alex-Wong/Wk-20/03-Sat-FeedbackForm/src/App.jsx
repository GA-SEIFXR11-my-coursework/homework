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
  function handleSubmit(e){
    e.preventDefault(); // Prevent the browser from reloading the page
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
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
      <TextField id="name" label="Name" variant="outlined" value={""} fullWidth/>
      <TextField id="email" label="Email" variant="outlined" fullWidth/>
    </Stack>
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">Ratings</Typography>
      <Typography component="legend">Food</Typography>
      <Rating name="food" id="food" value={null} />
      <Typography component="legend">Service</Typography>
      <Rating name="service" id="service" value={null} />
      <Typography component="legend">Cleanliness</Typography>
      <Rating name="cleanliness" id="cleanliness" value={null} />
    </Stack>
    <Stack spacing={2}>
      <Typography component="h1" variant="h5">Comments</Typography>
      <TextareaAutosize minRows={7} placeholder="Type your comment"/>
    </Stack>
    <Button type="submit">Submit</Button>
  </Stack>
  )
}
