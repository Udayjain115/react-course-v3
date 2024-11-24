import data from './data';
import List from './assets/Components/List';
import { useState } from 'react';
const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button
          className="btn btn-block"
          type="button"
          onClick={() => {
            setPeople([]);
          }}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
