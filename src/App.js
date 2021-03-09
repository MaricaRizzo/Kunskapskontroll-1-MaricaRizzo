import React from 'react';
import Titles from './components/Title';
import NumberTickets from './components/NumberTickets';
import NameForm from './components/NameForm';
import Class from './components/Class';
import Terms from './components/Terms';

function App() {
  return (
    <div className="App">
      <Class></Class>
      <Titles></Titles>
      <NameForm></NameForm>
      <Terms></Terms>
    </div>
  );
}

export default App;
