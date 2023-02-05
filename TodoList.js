import React, { useState } from 'react'

function TodoList() {
    const [newItem, setNewItem]=useState("");
    const [items, setItems]= useState([]);
    function addItem(){
        if(!newItem){
            alert("Enter an item");
            return;
        }
        const item ={
            id: Math.floor(Math.random()*1000),
            value: newItem
        };
        setItems(oldList => [...oldList, item]);

    }
    function deleteItem(id){
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }
  return (
    <div>
        
      <h1>TODO LIST APP</h1>
      <input type="text"
      placeholder='Add an item' 
      value={newItem}
      onChange={e=> setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <div className='appl'>
    <ul>
        {items.map(item => {
            return(
                
                <li key={item.id} >{item.value} <button className='delete-Item' onClick={() => deleteItem(item.id)}>delete</button></li>
            )
        })}
    </ul>
    </div>
    </div>
  )
}

export default TodoList
