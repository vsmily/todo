import { useState } from 'react';
import './AddTodo.css';
import { useTodoList } from '../GlobalContext/GlobalContext';
export default function AddTodo(){
    console.log('Entro en AddTodo');
//    alert("Creando AddToDo");
    const initData = {
        name: "",
        description: "",
        date: new Date()
    }
    const contextTodoList = useTodoList();
    const [data, setData] = useState( initData );

    function handleSubmit(e){
        e.preventDefault();
        contextTodoList.AddToDo(data);
       // setData(initData);
               
    }
    return (
        <>
        <h2>ADD NEW TODO</h2>
        <div className = "form" >
            <form onSubmit={handleSubmit}>
                <div className='sep'>
                    <div>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            id="name" 
                             
                            placeholder="Enter name"
                            onChange= { e=> setData({ ...data, name: e.target.value}) }
                        />
                    </div>
                </div>
                <div className='sep'>
                    <div>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div>
                        <textarea 
                            
                            id="description" 
                            cols={45} 
                            rows={4}
                            placeholder="Enter description"
                            onChange= { e=> setData({ ...data, description: e.target.value}) }
                        />
                    </div>
                </div>
                <div className='sep'>
                    <div>
                        <label htmlFor="Date">Date To Do</label>
                    </div>
                    <div>
                        <input 
                                type="Date" 
                                id="Date" 
                                placeholder="Date To Do"
                                
                                onChange= { e=> setData({ ...data, date: e.target.valueAsDate}) }
                        />
                    </div>
                </div>


                <div className='sep'>
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
        </>
    );
}