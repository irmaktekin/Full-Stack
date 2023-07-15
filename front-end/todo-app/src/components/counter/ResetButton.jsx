import { useEffect, useState } from 'react';

export default function ResetButton({numberReset}){


    const resetNumber = () => {
        numberReset(0);
        
    }


    return(
        <div>
            <button className="resetButton" onClick={resetNumber}>
                Reset
            </button>
        </div>
    )

    
}


