import './Counter.css';
import { useState } from 'react';
import {PropTypes} from 'prop-types';
export default function Counter ({by}) {

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
    }

    function minusCounter() {

        if(count<=0){
            console.log("cannot be negative!");

           return(
            <div className="ErrorAlert">
                <div>Cannot be negative number!</div>
            </div>
           )
        }
        else{
            setCount(count - by);


        }

 
    }
    return (
        <div className="Counter">
            <span className="count">{count} </span>
            <div>
                <button className="counterButton" onClick={incrementCounter}
                >+{by}</button>
                <button className="counterButton" onClick={minusCounter}
                >-{by}</button>
            </div>
        </div>
    )
}

Counter.propTypes = {
    by: PropTypes.number
}
Counter.defaultProps = {
    by: 1
}