import React, { useContext } from 'react'
import { GlobalContext } from '../components/context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { DelTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => DelTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
