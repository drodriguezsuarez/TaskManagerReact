import React, { useState } from 'react';
import '../stylesheets/Task-form.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSend = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        };

        props.onSubmit(newTask);
    };

    return (
        <form 
            className='task-form'
            onSubmit={handleSend}>
            <input
                className='task-input'
                type='text'
                placeholder='Enter a Task'
                name='text'
                onChange={handleChange}
            />
            <button className='task-button'>Add Task</button>
        </form>
    );
}

export default TaskForm;