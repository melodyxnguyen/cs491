import { useState } from 'react'
import React from 'react';
import './App.css'

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Bananas', checked: false },
    { id: 2, name: 'Sourdough Bread', checked: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [nextId, setNextId] = useState(3);

  const addItem = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setItems(prev => [...prev, { id: nextId, name: trimmed, checked: false }]);
    setNextId(n => n + 1); // Next item
    setInputValue('');
  };

  const toggleItem = (id) => {
    setItems(prev =>
      prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    );
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addItem();
  };

  const unchecked = items.filter(i => !i.checked);
  const checked = items.filter(i => i.checked);

  return (
    <>
      <div className="app">
        <div className="header">
          <p className="eyebrow">Melody's</p>
          <h1>Grocery List</h1>
          <p className="subtitle">Add items below and check them off as you shop.</p>
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="Add an item…"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={addItem} aria-label="Add item">+</button>
        </div>

        {unchecked.length > 0 && (
          <>
            {checked.length > 0 && <p className="section-label">To get</p>}
            <ul className="list">
              {unchecked.map(item => (
                <li
                  key={item.id}
                  className="list-item"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="check-circle">
                    <span className="check-icon">✓</span>
                  </div>
                  <span className="item-name">{item.name}</span>
                  <button
                    className="delete-btn"
                    onClick={e => { e.stopPropagation(); deleteItem(item.id); }}
                    aria-label={`Delete ${item.name}`}
                  >×</button>
                </li>
              ))}
            </ul>
          </>
        )}

        {checked.length > 0 && (
          <>
            <p className="section-label">Got it</p>
            <ul className="list">
              {checked.map(item => (
                <li
                  key={item.id}
                  className="list-item done"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="check-circle">
                    <span className="check-icon">✓</span>
                  </div>
                  <span className="item-name">{item.name}</span>
                  <button
                    className="delete-btn"
                    onClick={e => { e.stopPropagation(); deleteItem(item.id); }}
                    aria-label={`Delete ${item.name}`}
                  >×</button>
                </li>
              ))}
            </ul>
          </>
        )}

      </div>
    </>
  );
};

export default App;
