import React, { useState } from 'react';

//stylesheet
import styles from './ToDo.module.css';
import trash from '../assets/trash.svg'


const ToDo = ({data, handlers}) => {


    return (
        <div className={`${styles.container} ${data.completed && styles.Checked}`}>
            <p>{data.task}</p>
            <div className={styles.buttons}>
                <input type='checkbox' checked={data.completed}  onChange={()=> handlers({type: "COMPLETED", payload: data.task })}/>
                <img src={trash} alt='icon trash' onClick={()=> handlers({type: "DELETE", payload: data.task})}/>
            </div>
        </div>
    );
};

export default ToDo;