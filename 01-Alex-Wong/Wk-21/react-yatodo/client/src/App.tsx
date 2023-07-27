import * as React from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from "@mui/material/TableFooter";
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

interface T_todo{
  _id?: string;
  title: string;
  details: string;
  completed: boolean;
  created_at?: string;
  last_updated_at?: string;
}

export default function App(){
  const [todoList, setTodoList] = React.useState([] as T_todo[]);

  React.useEffect(()=>{
    axios
      .get("/api/todo")
      .then((res) => {
        setTodoList(res?.data);
      })
      .catch(e => console.log(e))
    ;
  },[])

  return (
    <TodoTable todoList={todoList}/>
  )
}

interface TodoTableProps{
  todoList: T_todo[];
}
function TodoTable(props: TodoTableProps){
  const {todoList} = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Details</TableCell>
            <TableCell align="left">Completed</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo, index)=>{ return(<><TodoRow todo={todo} no={index}/></>)})}
        </TableBody>
        <TableFooter>
          <CreateNewTodoRow />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

interface TodoRowProps{
  no: number;
  todo: T_todo;
}
function TodoRow(props: TodoRowProps){
  const {todo, no} = props;
  const [completed, setCompleted] = React.useState(todo.completed);
  const [deleted, setDeleted] = React.useState(false);

  function handleChange(){
    const data = {...todo};
    data.completed = !completed;
    axios({
      method: 'put',
      url: `/api/todo/${todo._id}`,
      data: data,
    })
    setCompleted(!completed);
  }

  function handleDelete(){
    axios({
      method: 'delete',
      url: `/api/todo/${todo._id}`
    })
    setDeleted(true);
  }

  if(deleted){
    return <></>
  }else{
    return(
      <TableRow
        key={todo._id}
      >
        <TableCell component="th" scope="row">{no}</TableCell>
        <TableCell align="left">{todo.title}</TableCell>
        <TableCell align="left">{todo.details}</TableCell>
        <TableCell align="left">
          <Switch
            checked={completed}
            onChange={handleChange}
          />
        </TableCell>
        <TableCell align="left">
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    )
  }
}

function CreateNewTodoRow(){
  const [title, setTitle] = React.useState('');
  const [details, setDetails] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<string>>){
    setState(event.target.value);
  }

  function handleSubmit(){
    const data: T_todo = {
      title: title,
      details: details,
      completed: false
    }
    axios({
      method: 'post',
      url: '/api/todo',
      data: data
    })
  }

  return(
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 }} }
    >
      <TableCell component="th" scope="row">New todo</TableCell>
      <TableCell align="left">
        <TextField
          fullWidth
          id="title-input"
          label="title"
          value={title}
          onChange={(e)=>{handleInputChange(e, setTitle)}}
        />
      </TableCell>
      <TableCell align="left">
        <TextField
          fullWidth
          id="details-input"
          label="details"
          value={details}
          onChange={(e)=>{handleInputChange(e, setDetails)}}
        />
      </TableCell>
      <TableCell align="left"></TableCell>
      <TableCell align="left">
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
          New todo
        </Button>
      </TableCell>
    </TableRow>
  )
}


// Create todo
// Get all todo
// get todo by id
// update todo
// delete todo

// 1. Make a request to the server for all the todos on mount and display them
// 2. Have a form to add a new todo
// 3. Have a way to mark a todo as completed
