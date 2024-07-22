import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expense = { amount, category, description, date };
        try {
            await axios.post('/api/expenses', expense);
            alert('Expense added successfully');
        } catch (error) {
            console.error(error);
            alert('Error adding expense');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AddExpense;
