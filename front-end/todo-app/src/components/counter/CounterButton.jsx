
import {PropTypes} from 'prop-types';

export default function CounterButton ({by,incrementCounterParentFunction,decrementMethod}) {

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

 
     
    return (
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => incrementCounterParentFunction(by)}
                >+{by}</button>
                <button className="counterButton" onClick={() => decrementMethod(by)}
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