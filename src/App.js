
import React from 'react';
import './App.css';
import AddTodo from './AddToDo/AddToDo';
import Calendar from './Calendar/Calendar';
import MonthYear from './MonthYear/MonthYear';
import {MYContext}  from './GlobalContext/GlobalContext.js';
import DaysOfWeek from './DaysOfWeek/DaysOfWeek';
import { TodoList } from './ToDoList/ToDoList';
//const year = new Date().getFullYear();
//const month = new Date().getMonth() + 1;


function App() {
  return (
    <>
      <MYContext>
        <div className="App">
              
            <div className='Calendar'>
              <h2> TASK SCHEDULE</h2>
              <hr></hr>
              <MonthYear />
              <hr></hr>
              <DaysOfWeek />
              <Calendar />
            </div>
            
            <div className='todo'>
              <AddTodo />
              <TodoList />
            </div>
                  
        </div>
      </MYContext>
    </>
  );
}

export default App;

/**
 *          <h2> CALENDARIO DE TAREAS</h2>
          <hr></hr>
          <MonthYear />
          <hr></hr>
          <DaysOfWeek />
          <Calendar />
 */