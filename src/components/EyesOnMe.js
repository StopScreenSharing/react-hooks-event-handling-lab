import React from "react";

function EyesOnMe() {
    const handleFocus = (event) => {
        console.log('Good!')
    };
    const handleBlur = (event) => {
        console.log('Hey! Eyes on me!')
    };

    return(
        <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    );
}

export default EyesOnMe;