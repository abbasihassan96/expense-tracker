import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Inital state
const InitailState = {
    transaction: []
}

//Creat context
export const GlobalContext = createContext(InitailState);

//Provider comopnent
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitailState);

    //Actions
    function DelTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{ transaction: state.transaction, DelTransaction, AddTransaction }}>
        {children}
    </GlobalContext.Provider>);
}