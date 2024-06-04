import { useState, useEffect } from 'react';
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props) => {
    const [title, setTitle] = useState(``);
    const [amount, setAmount] = useState(``);
    const [formValid, setFormValid] = useState(false);
    
    const inputTitle = (event) => {
            setTitle(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault();
        console.log(`Saved`);
        const itemData = {
            id: uuidv4(),
            title, 
            amount: Number(amount)
        };
        props.onAddItem(itemData)
        setTitle(``);
        setAmount(``);
        setFormValid(false)
    }

    useEffect( () => {
        const checkData = (title.trim().length > 0) && 
        (amount !== 0);
        if(checkData) setFormValid(true);
    },[title, amount])

    return (
    <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>Expense Description: </label>
                <input type="text" placeholder="description here" onChange={inputTitle} 
                value={title}/>
            </div>
            <div className="form-control">
                <label>Amount: </label>
                <input type="number" placeholder="amount here" onChange={inputAmount} 
                value={amount}/>
            </div>
            <div>
                <button type="submit" className="button" disabled={!formValid}>Send</button>
            </div>
        </form>
    </div>
    )
}

export default FormComponent