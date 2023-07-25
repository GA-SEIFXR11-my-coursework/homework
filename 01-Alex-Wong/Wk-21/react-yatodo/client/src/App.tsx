import * as React from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface T_todo{
  _id: string;
  title: string;
  details: string;
  completed: boolean;
  created_at: string;
  last_updated_at: string;
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
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Details</TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo, index)=>{ return(<><TodoRow todo={todo} no={index}/></>)})}
        </TableBody>
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
  return(
    <TableRow
      key={todo._id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 }} }
    >
      <TableCell component="th" scope="row">{no}</TableCell>
      <TableCell align="right">{todo.title}</TableCell>
      <TableCell align="right">{todo.details}</TableCell>
      <TableCell align="right">{todo.completed}</TableCell>
    </TableRow>
  )
}

// function createNewTodoRow(){}


// Create todo
// Get all todo
// get todo by id
// update todo
// delete todo

// 1. Make a request to the server for all the todos on mount and display them
// 2. Have a form to add a new todo
// 3. Have a way to mark a todo as completed
