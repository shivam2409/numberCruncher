import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';

function App() {
  return (
    <div>
      <Alert />
      <Form />
      <List />
    </div>
  );
}

export default App;
