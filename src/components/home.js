// import { useState } from "react";

// const Home = () => {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   const handleChange = (event) => {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   };

//   const addItem = () => {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   };

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do list</h1>
//       </div>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="Add items"
//         value={inputText}
//       />
//       <button onClick={addItem} type="submit">
//         Add
//       </button>
//       <div>
//         <ul>
//           {items.map((todoItem) => (
//             <li>&hearts; {todoItem}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;

import {useState} from 'react';

const Home = () => {

const [inputText, setInputText] = useState('');
const [items, setItems] = useState([]);

const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
}

const addItem = () => {
        setItems((prevItems) => {
          return [...prevItems, inputText];
        });
        setInputText("");
      };

    return ( 
        <div className="container">
              <div className="heading">
                 <h1>To-Do list</h1>
               </div>
               <input   
                    onChange={handleChange}
                    type="text"
                    placeholder="Add items"
                    value = {inputText}
               />
               <button onClick={addItem} type="submit">
                 Add
               </button>
               <div>
                <ul>
                    {items.map((todoItems) => (
                        <li>&hearts; {todoItems}</li>
                    ))}
                </ul>
               </div>
        </div>
     );
}
 
export default Home;