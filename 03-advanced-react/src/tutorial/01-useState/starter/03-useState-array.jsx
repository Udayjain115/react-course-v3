import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClick = (id) => {
    let newPeople = people.filter((person) => id !== person.id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        console.log(person);

        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => handleClick(id)}>Remove</button>
          </div>
        );
      })}

      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => {
          setPeople([]);
        }}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
