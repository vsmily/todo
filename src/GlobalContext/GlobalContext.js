import { createContext, useContext, useReducer, useState, useRef, useEffect } from 'react';
const MonthYearContext = createContext();
const TodoListContext = createContext();
export const ACTION_TYPES = {
    ADD: 0,
    UPDATE: 1,
    DELETE: 2
};
export function useMonthYearContext(){
    return useContext(MonthYearContext);
}
export function useTodoList(){
    return useContext(TodoListContext);
}
 

function reducer( state, action){
    switch( action.type ){
        case ACTION_TYPES.ADD:
            return [...state, action.payload];
        case ACTION_TYPES.DELETE:
            return state.filter( s => s.id !== action.payload.id );
        case ACTION_TYPES.UPDATE:
            console.log('Entro al reducer.update');
            const updated = state.map( s => {
                   if (s.id === action.payload.id){
                        s.completed = !action.payload.completed;
                        console.log(`Recorriendo id ${s.id} ${s.completed}`);
                   }
                    return s;
            
            })
            return [...updated];
        default:
            return state;
    }
}
export function MYContext({children}){
    /*const iniState = {    id: 1,
        name: 'test',
        description: 'test',
        completed: false,
        year: 2022,
        month: 9,
        day: 8    };*/
    const [monthYear, setMonthYear] = useState({
                                                    month: new Date().getMonth() + 1,
                                                    year: new Date().getFullYear()
    });

    const [todoList, dispatch]=useReducer(reducer,[]);
    const count = useRef(1);
    const [listTaskMonthYear,setListTaskMonthYear] = useState([]);

    useEffect(  ()=>{
        //alert(`Ejecuto efecto mes ${monthYear.month} anio ${monthYear.year}`);
        setListTaskMonthYear( todoList.filter( t => t.month === monthYear.month && t.year === monthYear.year ));
        //listTaskMonthYear = todoList.filter( t => t.month === monthYear.month && t.year === monthYear.year );
    },
    [monthYear, todoList]);

    function AddToDo( params){
        const action =  {   type: ACTION_TYPES.ADD,
                            payload:    {
                                            id: count.current,
                                            name: params.name,
                                            description: params.description,
                                            completed: false,
                                            year: params.date.getFullYear(),
                                            month: params.date.getMonth()+1,
                                            day: params.date.getUTCDate()
                                        }
                        }
        
        dispatch(action);
        count.current = count.current + 1;
    }

    function DeleteToDo(id){
        
        const action = {    type: ACTION_TYPES.DELETE,
                            payload:    {
                                            id: id
                                        }
                        };
        dispatch( action );
        
    }
    function UpdateToDo(id, completed){
        alert(`id a actualizar ${id}`);
        const action = {    type    : ACTION_TYPES.UPDATE,
                            payload :   {
                                            id: id,
                                            completed: completed
                                        }
                        };
        dispatch( action );
      //  alert(`Termino de actualizar `);
    }
    


    return (
    <MonthYearContext.Provider value ={ {monthYear, setMonthYear, listTaskMonthYear}}>
        <TodoListContext.Provider value={{todoList,AddToDo,DeleteToDo, UpdateToDo}}>
            {children}
        </TodoListContext.Provider>
    </MonthYearContext.Provider>
    )
}
