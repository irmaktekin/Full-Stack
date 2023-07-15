import { useState } from 'react';

export default function ResetButton(){
    const [count,setCount ] = useState(0);

    function resetNumber(){
        setCount(0);
    }


    return(
        <div>
            <button className="resetButton" onClick={resetNumber}>
                Reset
            </button>
        </div>
    )

    
}


