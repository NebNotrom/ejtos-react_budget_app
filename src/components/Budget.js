import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,remaining,Currency } = useContext(AppContext);
    /*const totalBudget = budget.reduce((total, item) => {
        return (total += item.cost);
    }, 0);*/
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (remaining <= 0) {
            alert("Cannot reduce the budget below current spending");
            /*setNewBudget(totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });*/
        }
        if (newBudget >= 20000) {
            alert("Budget cannot exceed "+Currency+"20000");
           /* setNewBudget(20000);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });*/

        }else{
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
            });
        }

    
    
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
