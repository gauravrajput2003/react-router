import React, { useRef } from 'react';

const Refex = () => {
    const refcount = useRef(0);

    function handleref() {
        refcount.current++;
        console.log(refcount.current); 
    }

    return (
        <div>
            <p>Refex: {refcount.current}</p> 
            <button onClick={handleref}>Increase</button>
        </div>
    );
};

export default Refex;
