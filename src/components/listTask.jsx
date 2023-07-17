import React, { useState } from "react";
import TaskForm from "./taskForm";
import Task from './task';
import '../stylesheets/ListTask.css';

function ListTask() {

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const taskUpdates = [task, ...tasks];
            setTask(taskUpdates);
        }
    };

    const deleteTask = id => {
        const taskUpdates = tasks.filter(task => task.id !== id);
        setTask(taskUpdates);
    };

    const complementTask = id => {
        const taskUpdates = tasks.map(task => {
            if (task.id === id) {
                task.complement = !task.complement;
            }
            return task;
        });
        setTask(taskUpdates);
    };

    return(
        <>
            <TaskForm onSubmit={addTask} />
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complement={task.complement}
                            complementTask={complementTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListTask;