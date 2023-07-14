import './Counter.css';
import { useState } from 'react';
import {PropTypes} from 'prop-types';

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

                                
        </>

    )
}

 
 function CounterButton ({by,incrementCounterParentFunction,decrementMethod}) {

    //create javascript object for defining style
   /*const buttonStyle = {
        fontSize:"30px",
        backgroundColor: "#00a5ab",
        width: "100px",
        margin:"10px",
        color:"white",
        padding:"15px",
        borderRadius:"15px"

    
    };
*/
const [count, setCount ] = useState(0);
    function incrementCounter() {

 
        setCount(count + by);
        incrementCounterParentFunction(by);
        }

    function minusCounter() {

       

           
        
            setCount(count - by);
            decrementMethod(by);


        

 
    }
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={incrementCounter}
                >+{by}</button>
                <button className="counterButton" onClick={minusCounter}
                >-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}