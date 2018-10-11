import React from 'react';

const ComponentA = props => {
  const setCurrent = () => {
    props.setNewCurrent('A');
  };

  return (
    <div>
      <h2>Component A</h2>
      <div>{props.current}</div>
      <div>
        <button onClick={setCurrent}>Set to A</button>
      </div>
    </div>
  );
};

export default ComponentA;
