import React, { useState } from 'react';

//stylesheet
import styles from './ToDo.module.css';
import trash from '../assets/trash.svg'
import Edit from '../assets/pen.svg';


const ToDo = ({data, handlers}) => {

    return (
        <div className={`${styles.container} ${data.completed && styles.Checked}`}>
            <div className={styles.buttons}>
                <input type='checkbox' checked={data.completed}  onChange={()=> handlers({type: "COMPLETED", payload: data.task })}/>
                <p>{data.task}</p>
            </div>
            <img className={styles.icon} src={trash} alt='icon trash' onClick={()=> handlers({type: "DELETE", payload: data.task})}/>
        </div>
    );
};

export default ToDo;