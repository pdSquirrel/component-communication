import React from 'react';

const ComponentB = props => {
  const setCurrent = () => {
    props.setNewCurrent('B');
  };

  return (
    <div>
      <h2>Component B</h2>
      <div>{props.current}</div>
      <div>
        <button onClick={setCurrent}>Set to B</button>
      </div>
    </div>
  );
};

export default ComponentB;
