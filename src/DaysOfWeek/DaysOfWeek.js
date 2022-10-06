import './DaysOfWeek.css';
export default function DaysOfWeek(){
    console.log('Entro en DaysOfWeek');
    const aDays = [  'SU',
                    'MO',
                    'TU',
                    'WE',
                    'TH',
                    'FR',
                    'SA'];
    return (
        <div>
            {aDays.map((a, i) => {
                return <div key = {i} className="dayOfWeek">{a}</div>
            })}
        </div>
    )
}