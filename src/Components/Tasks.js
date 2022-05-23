import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid'

//style
import styles from './Tasks.module.css';

//context 
import { taskContext } from '../Context/TodoContext';

//components
import ToDo from './ToDo';

const Tasks = () => {

    const {todo, dispatch} = useContext(taskContext)
    const [all, setAll ] = useState(true);
    const [completed, setCompleted ] = useState(false);
    const [unCompleted, setUnCompleted ] = useState(false);
    
    const completedTask = todo.filter(task => task.completed === true);
    const unCompletedTask = todo.filter(task => task.completed !== true);

    useEffect(()=> {
        dispatch({});
    }, [])


    const menuHandler = e => {
        switch(e.target.innerText){
            case'All':
                setAll(true);
                setCompleted(false);
                setUnCompleted(false);
                break;
            case 'Completed':
                setAll(false);
                setCompleted(true);
                setUnCompleted(false);
                break;
            case 'Uncompleted': 
                setAll(false);
                setCompleted(false);
                setUnCompleted(true);
                break;
            default:
                break;
        }
    }

    const clearHandler = ()=> {
        window.localStorage.clear();
        dispatch({type:'CLEAR_ALL'});
    }

    return (
        <div className={styles.container}>
            <div className={styles.link}>
                <span onClick={menuHandler} className={`${all === true && styles.menuActive}`}>All</span>
                <span onClick={menuHandler} className={`${completed === true && styles.menuActive}`}>Completed</span>
                <span onClick={menuHandler} className={`${unCompleted === true && styles.menuActive}`}>Uncompleted</span>
            </div>
            
            {
                all ?
                todo.map(task => <ToDo key={v4()} data={task} handlers={dispatch} />) :
                completed ?
                    completedTask.map(task => <ToDo key={v4()} data={task} handlers={dispatch} />):
                    unCompletedTask.map(task => <ToDo key={v4()} data={task} handlers={dispatch} />)
            }
            {
                Boolean(todo.length) && <button onClick={clearHandler}>clear All</button>
            }
        </div>
    );
};

export default Tasks;