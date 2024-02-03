import React, { useState } from 'react';

function ItemList({ items, onAdd, onRemove }) {
    const [newItem, setNewItem] = useState('');

    const handleAdd = () => {
        onAdd(newItem);
        setNewItem('');
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => onRemove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAdd}>Add Item</button>
        </div>
    );
}

export default ItemList;
