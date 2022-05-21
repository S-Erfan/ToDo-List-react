import React, { useContext, useEffect } from 'react';
import { v4 } from 'uuid'

//style
import styles from './Tasks.module.css';

//context 
import { taskContext } from '../Context/TodoContext';

//components
import ToDo from './ToDo';

const Tasks = () => {

    const {todo, dispatch} = useContext(taskContext)

    useEffect(()=> {
        dispatch({})
    }, [])

    console.log(todo);

    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <span>All</span>
                <span>Completed</span>
                <span>Uncompleted</span>
            </div>
            
            {
                todo.map(task => <ToDo key={v4()} data={task} handlers={dispatch} />)
            }
            {
                Boolean(todo.length) && <button>clear All</button>
            }
        </div>
    );
};

export default Tasks;