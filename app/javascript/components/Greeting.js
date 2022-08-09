import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  console.log('message', message);
  return (
    <div>
      <h1>Generating random messages</h1>
      <div>
        <h1>The message is: {message} </h1>
        Refresh to see another message
      </div>
    </div>
  );
};

export default Greeting;
