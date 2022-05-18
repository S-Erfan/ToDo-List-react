import React, { useContext, useEffect } from 'react';
import { v4 } from 'uuid'

//context 
import { taskContext } from '../Context/TodoContext';

//components
import ToDo from './ToDo';

const Tasks = () => {

    const {todo, dispatch} = useContext(taskContext)

    useEffect(()=> {
        // console.log(todo);
    }, [])

    return (
        <div>
            {
                todo.map(task => <ToDo key={v4()} data={task} handlers={dispatch} />)
            }
        </div>
    );
};

export default Tasks;