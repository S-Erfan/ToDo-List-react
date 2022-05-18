import React, { useContext, useEffect, useState } from 'react';


//components
import Header from './Components/Header';
import Tasks from './Components/Tasks';

//context
import TodoContext from './Context/TodoContext';


const App = () => {


  return (
    <TodoContext>
      <div className='App'>
        <Header/>
        <div className='todo'>
          <Tasks />
        </div>
      </div>
    </TodoContext>
  );
};

export default App;
