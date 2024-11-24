import { useState } from 'react'; // named import of useState function from react module

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  // useState(0) sets the current State, then when i use the setCount function, it will update the state to whatever the parameter of that function is

  const handleClick = () => {
    setCount(count + 1);
    setCount(count - 1);
  };
  return (
    <>
      <h4>You clicked {count} times</h4>;
      <button
        className="btn"
        onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;
