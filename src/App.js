import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    callBackendAPI();
  }, []);

  const callBackendAPI = async () => {
    axios.get('/api/notes').then(res => setState(res.data));
  };

  return (
    <div className="App">
      {state && (
        <div className="controls">
          <h1>Try posting some notes to the server!</h1>
          <AddTodo />
          <TodoList notes={state} />
        </div>
      )}
    </div>
  );
}

export default App;
