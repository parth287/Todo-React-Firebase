import React from 'react';
import './Todo.css';
import { List, ListItemText, ListItemAvatar, ListItem,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';

function Todo(props) {
    return (
       
            <List>
                <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText className="todo" primary={props.text.todo} secondary="Deadline⏰" />
                <DeleteIcon className="del" onClick= {event => db.collection('todos').doc(props.text.id).delete()} ></DeleteIcon>
                </ListItem>
            </List>

    )
}

export default Todo
