import { useState } from "react";
import './Functional.css';
const FunctionalCompo=()=>{

    var [count,setcount]=useState(0)

    const increase=()=>{
        //count=count+1
        setcount(count+1)
    }

    const decrease=()=>{
        if(count >0)
            setcount(count-1);
    }

    const reset=()=>{
        setcount(count=0);
    }

    return(
        <div>
            <p>You click {count} times</p>
            <button type="button" onClick={increase}>increase</button>
            <button type="button" onClick={decrease}>decrease</button>
            <button type="button" onClick={reset}>reset</button>
        </div>
    )
}

export default FunctionalCompo;