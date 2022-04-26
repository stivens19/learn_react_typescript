import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState<number>(0);//generico number opcional en usestate
    const increment = (numero:number) => setValue(value + numero);
    return (
        <>
            <h3>Contador: <small>{value}</small></h3>
            <button className="btn btn-primary"
            onClick={()=>increment(1)}    
            >+1</button>
            &nbsp;
            <button className="btn btn-danger"
            onClick={()=>increment(-1)}
            >-1</button>
        </>
    )
}

export default Counter