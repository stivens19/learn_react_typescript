import { useState } from 'react';

const useForm = <T extends Object>(formulario:T) => {
    const [state, setState] = useState(formulario);
    const onChange = (value:string,campo:keyof T) => {
        setState({
            ...state,
            [campo]: value
        });
    }

    return {
        ...state,
        formulario:state,
        onChange
    }
}

export default useForm


// import { useState } from 'react';
 
// export const useForm = <T extends Record<string, unknown>>(form: T) => {
//   const [state, setState] = useState(form);
 
//   const handleChange = (value: string, field: keyof T) => {
//     setState({
//       ...state,
//       [field]: value,
//     });
//   };
 
//   return { ...state, form: state, handleChange };
// };