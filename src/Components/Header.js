import React, { useRef, useContext } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//stylesheet
import styles from './Header.module.css';
import Add from '../assets/add.svg';

import { taskContext } from '../Context/TodoContext';

const Header = () => {

    const notify = () => toast.error('Enter A Text :)', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Slide,
    });

    const toDo = useRef();

    const handler = e=> {
        e.preventDefault();
        toDo.current.value === '' ? notify() : dispatch({type: 'ADD' ,payload: toDo.current.value});
        toDo.current.value = '';
    }

    const {dispatch} = useContext(taskContext);


    return (
        <form onSubmit={handler} className={styles.container}>
            <input placeholder='Add Task...' type='text' ref={toDo} className={styles.input} />
            <img src={Add} alt='add logo' className={styles.addBtn} onClick={handler} />
            <ToastContainer />
        </form>
    );
};

export default Header;