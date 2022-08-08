import { useState } from "react"


export const useForm = (initialState= {}) => {
    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues(initialState)
    }
    
    const handleinputChange=({target})=>{
        console.log(values);
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleinputChange, reset]
}
