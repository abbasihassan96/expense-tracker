import React from 'react'
import { GlobalContext } from '../components/context/GlobalState';
import { useContext } from 'react';

export const Balance = () => {
    const { transaction } = useContext(GlobalContext);

    const amount = transaction.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
