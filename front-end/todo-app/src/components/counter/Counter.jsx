import './Counter.css';
import { useEffect, useState } from 'react';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

export default function Counter() {
    const [count, setCount ] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count+by);

    }
    function decrementCounterParentFunction(by){
        setCount(count-by);

    }
    
    return (
        <>
        <span className="totalCount">{count} </span>

        <CounterButton by = {1} incrementCounterParentFunction={incrementCounterParentFunction} 
                                decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by = {2} incrementCounterParentFunction={incrementCounterParentFunction}
                                decrementMethod = {decrementCounterParentFunction}/>
        <CounterButton by = {5} incrementCounterParentFunction={incrementCounterParentFunction}
                                decrementMethod = {decrementCounterParentFunction}/>
        <ResetButton numberReset={setCount}/>
                                
        </>

    )
}

 
