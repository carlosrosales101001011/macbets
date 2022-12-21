import { types } from "../types/type";

const initialState = {
    DropdownOpen: false,
    openCartilla: false,
    isOpenMenu: false,

    isCheckbox: false
}



export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiOpenDropdown:
            return {
                ...state,
                dropdownOpen: true
            }

        case types.uiCloseDropdown:
            return {
                ...state,
                dropdownOpen: false
            }
        case types.uiOpenModal:
            return {
                ...state,
                openCartilla: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                openCartilla: false
            }
        case types.uiIsOpenMenu:
            return {
                ...state,
                isOpenMenu: true
            }
        case types.uiIsCloseMenu:
            return {
                ...state,
                isOpenMenu: false
            }
        case types.uiCheckboxIsSelect:
            return {
                ...state,
                isCheckbox: true
            }
        case types.uiCheckboxNotSelect:
            return {
                isCheckbox: false
            }
        default:
            return state;
    }
}