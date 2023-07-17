import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function Task({ id, text, complement, complementTask, deleteTask }) {
    return (
        <div className={complement ? 'task-container complement' : 'task-container'}>
            <div 
                className='task-text'
                onClick={() => complementTask(id)}>
                {text}
            </div>
            <div 
                className='task-container-icons'
                onClick={() => deleteTask(id)}>
                <AiOutlineCloseSquare  className='task-icon'/>
            </div>
        </div>
    );
}

export default Task;