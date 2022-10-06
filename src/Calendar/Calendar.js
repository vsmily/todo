import './Calendar.css';
import {useMonthYearContext} from '../GlobalContext/GlobalContext.js';

export default function Calendar(){
    console.log('Entro en Calendar');
    const context = useMonthYearContext();

    console.log(context.monthYear.month);
    console.log(context.monthYear.year);   
    
    function getClassName( day ){
        let className = day === "0" ? "dayEmpty":"day";
        //const isPending = ( context.monthYear.listTaskMonthYear.filter( 
        //        	            t => t.day == day ).length === 0 );

        const isPending =( context.listTaskMonthYear.filter( 
            t => t.day === parseInt(day) ).length > 0);
        if (isPending){
            className = className + ' pending';
        }
        return className;
    }
    function getLastDayOfMonth(year, month){
        let d = new Date(  );

        d.setFullYear(  year,
                        month,
                        0 ); 

        
        return d.getDate();

    }
        const dayOfWeek = new Date( context.monthYear.year, 
                                    context.monthYear.month - 1, 1).getDay() % 7;       
        const lastDay = getLastDayOfMonth( context.monthYear.year, context.monthYear.month );
        let aDays = [];
        for ( let  i = 1; i<= dayOfWeek; i++){
            aDays.push("0");        }
        for (let i =1 ; i<= lastDay; i++){
            aDays.push(i);
        }
        
        let weeks = Math.ceil( aDays.length / 7);
        let aWeeks = [];
        for (let i = 1; i<= weeks; i++){

            aWeeks.push( <div key={i} className={"Week"}>{i}</div>)
        }
        
    return(

        aDays.map((a, i) => {
            return <div key={i} className={getClassName(a)}>{a}</div>
        })
        
    )

}

/**
 *             aDays.map(a => {
                return <div className={a === " " ? "dayEmpty":"day"}>{a}</div>
            })
 */