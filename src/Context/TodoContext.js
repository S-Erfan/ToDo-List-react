import React, { createContext, useEffect, useReducer } from 'react';


let initialState = [];

export let saveTodo = [];


const reduce = (state, action)=> {
    switch(action.type) {
        case 'ADD':
            state = [...saveTodo];
            const adding = [...state, {task: action.payload, completed: false}]
            window.localStorage.setItem("todos", JSON.stringify(adding));
            return adding;
        case 'COMPLETED':
            const newState = state.map( todo => {
                if(todo.task === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            });
            window.localStorage.setItem("todos", JSON.stringify(newState));
            return newState;
        case 'DELETE':
            const removedState = state.filter(todo => todo.task !== action.payload);
            window.localStorage.setItem("todos", JSON.stringify(removedState));
            return removedState;
        case 'CLEAR_ALL': 
            saveTodo = [];
            return initialState;
        default:
            return saveTodo;
        
    }
};

export const taskContext = createContext();


const TodoContext = ({children}) => {

    const [todo, dispatch] = useReducer(reduce, initialState);


    useEffect(()=> {

        if(JSON.parse(window.localStorage.getItem("todos") !== null)){
            saveTodo = JSON.parse(window.localStorage.getItem("todos"))
        }

    }, [todo])

    return (
        <taskContext.Provider value={{todo, dispatch}}>
            {children}
        </taskContext.Provider>
    );
};

export default TodoContext;