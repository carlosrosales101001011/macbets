import { useState } from "react"

export const useChecked = (initialState) => {
    /*
    Lo que me deberia botar el initialState:
    const initialState = {
        hora: false,
        dia: false,
        semana: false,
        mes: false
    }
    */
    const [checked, setChecked] = useState({
        hora: false,
        dia: false,
        semana: false,
        mes: false
    })
    // console.log(checked);
    const handleClickCheckbox=({target})=>{
        setChecked({
            ...checked,
            [target.name]: !checked[target.name]
        })
    }
    return [checked, handleClickCheckbox]
}
