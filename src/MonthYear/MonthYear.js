import './MonthYear.css';
import React from 'react';
import {useMonthYearContext} from '../GlobalContext/GlobalContext';
export default function MonthYear(){
    console.log('Entro en MonthYear');
    const context = useMonthYearContext();
    const month = context.monthYear.month;
    const year = context.monthYear.year;
    return (
        <div>
            <form>
                <label htmlFor="mes">Month</label>
                <select name="mes" 
                        id="mes" 
                        
                        onChange={e => context.setMonthYear({...context.monthYear, month: parseInt(e.target.value)})}
                        value={month}
                        >
                    <option value="1">January</option>
                    <option value="2">Febraury</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">Octuber</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <label htmlFor="year" id = "lblYear" >Year</label>
                <input  type="number" 
                        id="year" 
                        name="year"
                        min="2000" 
                        max="2100" 
                        
                        onChange={e => context.setMonthYear({...context.monthYear, year: parseInt(e.target.value)})}
                        value={year}
                        ></input>
                
            </form>
        </div>
    );
}