import { useTodoList, useMonthYearContext } from "../GlobalContext/GlobalContext";
import './ToDoList.css';

export function TodoList(){
  //  alert(`Hago Render de la pagina`);
    const contextToDoList = useTodoList();
    const MonthYearContext = useMonthYearContext();
    const lista = MonthYearContext.listTaskMonthYear;
 //   lista = lista.filter( t => filterList( t, 9, 2022) );
    console.log('Entro en TodoList');
    function item( todo ){
        function getClassName(){
            let dateComp = new Date( todo.year, todo.month-1, todo.day );
            let today = new Date();
            today.setHours( today.getUTCHours()- today.getHours(), 0, 0, 0 );
            dateComp.setHours( today.getUTCHours()- today.getHours(), 0, 0, 0 );
            console.log(`comp ${dateComp.valueOf()}`);
            console.log(`today ${today.valueOf()}`);
            let className = 'item';
            if (todo.completed ){
                className = className + ' completed';
            }else{
                if ( today.valueOf() === dateComp.valueOf() ){
                    className = className + ' today'; 
                }else if(dateComp.valueOf() < today.valueOf()){
                    className = className + ' past';
                }
                

        }
            return className;
        }
        return(
        <>
            <div key={todo.id} className={getClassName()}>
                <div>
                    {todo.name}
                </div>
                <div>
                    {todo.description}
                </div>
                <div>
                    <button onClick={()=>contextToDoList.UpdateToDo(todo.id, todo.completed)}>{todo.completed? 'UNDONE': 'COMPLETE'}</button>
                    <button onClick={()=>contextToDoList.DeleteToDo(todo.id)}>DELETE</button>
                </div>
            </div>
        </>
        )

    }
    if (lista.length === 0){
        return <h2>NO TASKS IN MONTH</h2>
    }
    return(
        <div className="wrapper">
          
                {
            lista.map((t) => {
                return item( t )
            })
        }
          
        </div>
    )


}