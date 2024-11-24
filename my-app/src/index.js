import React from 'react';
import ReactDOM from 'react-dom/client';

// Define a functional component called Greeting
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>john doe</h2>;
};

const Message = () => {
  return <p>hello world</p>;
};

// Create a root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the Greeting component into the root DOM node
root.render(<Greeting />);
