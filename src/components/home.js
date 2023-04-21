import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState("");
  const [item, setItem] = useState("");

  const handelChange = (event) => {
    const { value } = event.target;
    setItems(value);
  };

  const formSubmit = (event) => {
    setItem(items);
    event.preventDefault();

  };



  return (
    <div className="container">
      <div className="heading">
        <h1>todo-list</h1>
      </div>
      <form onSubmit={formSubmit}>
        <input onChange={handelChange} type="text" placeholder="Add items" />
        <button type="submit">Add</button>
      </form>
        {item}
    </div>
  );
};

export default Home;
