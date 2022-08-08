import { combineReducers } from 'redux';
import { uiBetInCartilla } from './uiBetInCartillaReducers';

// import { uiReducer } from './uiReducer';
// import { calendarReducer } from './calendarReducer';
// import { authReducer } from './authReducer';

import {uiReducer} from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    showBet: uiBetInCartilla 
})

