import { useState } from 'react';

const UseStateObject = () => {
  const handleButtonClick = () => {
    setPerson({
      name: 'John',
      Age: 28,
      Hobby: 'Scream At The Computer',
    });
  };
  const [person, setPerson] = useState({
    name: 'Peter',
    Age: 24,
    Hobby: 'Read Books',
  });
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.Age}</h3>
      <h3>Enjoys To: {person.Hobby}</h3>
      <button
        onClick={handleButtonClick}
        className="btn">
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
