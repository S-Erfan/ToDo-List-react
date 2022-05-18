import React, { createContext, useReducer } from 'react';

const initialState = [];

const reduce = (state, action)=> {
    switch(action.type) {
        case 'ADD': 
            return [...state, {task: action.payload, completed: false}];
        case 'COMPLETED':
            const newState = state.map( todo => {
                if(todo.task === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            });
            return newState;
        case 'DELETE':
            const removedState = state.filter(todo => todo.task !== action.payload);
            return removedState;
        default:
            return state;
        
    }
};

export const taskContext = createContext();

const TodoContext = ({children}) => {

    const [todo, dispatch] = useReducer(reduce, initialState);

    return (
        <taskContext.Provider value={{todo, dispatch}}>
            {children}
        </taskContext.Provider>
    );
};

export default TodoContext;