import React, { useEffect, useState } from 'react';

const AnotherComponent = ()=> {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        const intervalId =setInterval(()=>{
            setCounter(counter=>counter+1);
        },3000);
        return(()=>{
            clearInterval(intervalId);
        })
    },[])
    return(
        <p>counter - {counter}</p>
    )
}
export default AnotherComponent;