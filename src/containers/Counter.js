import {useState, useEffect} from "react";
import Button from '../components/Button';
import CounterNumber from '../components/CounterNumber';
import Message from '../components/Message';

export default function Counter(){
    let [number, setNumber] = useState(0)
    
    useEffect(()=>{
        console.log(`me renderice y el numero vale ${number}`)
        return () =>{
            console.log(`me fui y el numero vale ${number}`)
        }
    },[number])
    
    const handleAdd = ()=>{
        setNumber(number+1)
    }

    const handleSub = ()=>{
        setNumber(number-1)
    }

    return(
        <section>
            <Button symbol="-" disabled={number <=0} onClick={handleSub}/>
            <CounterNumber number={number}/>
            <Button symbol="+" disabled={number >=30} onClick={handleAdd}/>
            {
                number <= 0? <Message operation="restar"/> : null
            }
            {    
                number >= 30? <Message operation="sumar"/> : null
            }
        </section>
    )
}