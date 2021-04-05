import React from 'react';
import './App.css';
import ReducerSample from './ReducerSample';

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <ReducerSample />;
}

export default App;
