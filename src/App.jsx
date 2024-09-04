// CRUD Application (TODO)

import React, { useState } from 'react';
// import './App.css';
import './Todo.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '' });
  const [isEditing, setIsEditing] = useState(false);

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setIsEditing(true);
    setCurrentItem(item);
  };

  const updateItem = (updatedItem) => {
    setIsEditing(false);
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
  };


    {/* expense Management system */}


      const [transaction, setTransaction] = useState([]);
      const [amount, setAmount] = useState('');
      const [type, setType] = useState('income');
      const [expenseEditing, setExpensediting] = useState(false);
      const [editIndex, setEditIndex] = useState(null);
    
      const totalIncome = transaction
        .filter(t => t.type === 'income')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);
    
      const totalExpense = transaction
        .filter(t => t.type === 'expense')
        .reduce((acc, t) => acc + parseFloat(t.amount), 0);
    
      const balance = totalIncome - totalExpense;
    
      const handleTransactions = () => {
        if (amount.trim() === '') return;
    
        const newTransaction = { amount, type };
    
        if (expenseEditing) {
          const updatedTransactions = transaction.map((t, index) =>
            index === editIndex ? newTransaction : t
          );
          setTransaction(updatedTransactions);
          setExpensediting(false);
          setEditIndex(null);
        } else {
          setTransaction([...transaction, newTransaction]);
        }
    
        setAmount('');
        setType('income');
      };
    
      const handleEdit = index => {
        const { amount, type } = transaction[index];
        setAmount(amount);
        setType(type);
        setExpensediting(true);
        setEditIndex(index);
      };
    
      const delExpense = index => {
        const updatedTransactions = transaction.filter((_, i) => i !== index);
        setTransaction(updatedTransactions);
      };

  return (
    <div className="App">

        <div className='todo-container'>
              <h1>React TODO Application</h1>
              <center>
                <ItemForm 
                  addItem={addItem} 
                  currentItem={currentItem} 
                  isEditing={isEditing} 
                  updateItem={updateItem}
                />
              </center>
              <ItemList
                items={items} 
                deleteItem={deleteItem} 
                editItem={editItem}
              />
        </div>

<br />
<br />

      <div className='expense-container'>

        <h1>Expense Management System</h1>

          <div>
            <div className='summary' style={{ display: 'flex', justifyContent: 'space-around' }}>
              <div>
                <p>Total Income</p>
                <p>{totalIncome}</p>
              </div>
              <div>
                <p>Total Expense</p>
                <p>{totalExpense}</p>
              </div>
              <div>
                <p>Balance</p>
                <p>{balance}</p>
              </div>
            </div>

            <center>
              <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                type="Number"
                placeholder="Enter amount"
              />
              <select
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <button onClick={handleTransactions}>
                {expenseEditing ? 'Update' : 'Submit'}
              </button>
            </center>

            <div>
              <ul className='transaction-list'>
                {transaction.map((data, index) => {
                  return (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between',alignItems:'center', margin: '15px' }}>
                      {data.amount} {data.type}
                      <div>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => delExpense(index)}>Delete</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          </div>
            </div>
            );
          }

export default App;