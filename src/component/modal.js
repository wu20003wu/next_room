import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';
import '../component/modal.css';

function Modal({ onClose }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetch("/kategorien")
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    fetch('landingpage/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: selectedCategory,
        amount: parseFloat(amount)
      })
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        onClose();
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="popup">
      <div className="modal-box">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="modal-content">
          <h1>ADD TRANSACTION</h1>
          <p>Wähle eine Kategorie</p>
          <form onSubmit={handleFormSubmit}>
            <div className="select-box">
              <label>
                <select name="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                  {categories.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <input type="number" step="0.01" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
            <button type="submit" className="save-button">
              <SendHorizontal /> Speichern
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;