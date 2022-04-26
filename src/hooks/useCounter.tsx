import { useState } from 'react';

const useCounter = (initialValue:number=10) => {
    const [value, setvalue] = useState<number>(initialValue);
    const increment = (numero:number) => setvalue(value + numero);

    return {
        value,
        increment
    }

}

export default useCounter