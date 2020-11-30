import './App.css';
import  React,{useState,useEffect} from 'react';
import Todo from './Todo';
import { Button,Input,FormControl, InputLabel } from '@material-ui/core';
// import db from './firebase';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')


useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    console.log(setTodos(snapshot.docs.map(doc => doc.id) ))
    setTodos(snapshot.docs.map(doc =>  ({id:doc.id, todo:doc.data().task})) )

  })

}, []);



const addTodo = (event) =>{
  event.preventDefault();
  // console.log("I am working, Added a TODO");
  setTodos([...todos, input ])
  db.collection('todos').add({
    task:input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  setInput('')

}

  return (
    <div className="App">
     <h1>Your Todo-List🔥🔥</h1>
        <form action="">
          <FormControl>
            <InputLabel>Write a Todo🐱‍🏍</InputLabel>
            <Input type="text" value= {input} onChange={event => setInput(event.target.value) } />
            <Button disabled={!input} type="submit" onClick= {addTodo} variant="contained" color="primary">Add todo</Button>  
          </FormControl>
        </form>
        <ul>
        {todos.map(todo => (
              <Todo text={todo} />
              
            ) )}
        </ul>
    </div>
  );
}

export default App;
