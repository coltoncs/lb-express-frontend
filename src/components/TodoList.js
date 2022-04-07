import axios from 'axios';
import './TodoList.css';

export default function TodoList({notes}) {
  function handleClick(id) {
    //Send delete request to the server for the specified note id
    axios
      .delete(`/api/notes/${id}`)
      .then(res => res.json())
      .then(window.location.reload());
  }

  return (
    <ul className="note-list">
      {notes.map(note => {
        return (
          <div className="note" key={note.id}>
            <span onClick={() => handleClick(note.id)}>X</span>
            <div>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
