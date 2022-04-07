import {useRef} from 'react';
import axios from 'axios';
import './AddTodo.css';

export default function AddTodo() {
  const todoForm = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    //Grab current title and content values from the form
    const form = todoForm.current;
    const title = form['title'].value;
    const content = form['content'].value;

    //Post title and content to the server as a new note
    axios
      .post('/api/notes/', {title: title, content: content})
      .then(res => res.json())
      .then(window.location.reload());
  };

  return (
    <form ref={todoForm} className="add-todo">
      <div className="control">
        <input
          className="control_input"
          name="title"
          type="text"
          id="title"
          autoComplete="off"
          placeholder=" "
        />
        <label className="control_label" htmlFor="title" id="title_label">
          Title
        </label>
      </div>
      <div className="control">
        <input
          className="control_input"
          name="content"
          type="text"
          id="content"
          autoComplete="off"
          placeholder=" "
        />
        <label className="control_label" htmlFor="content" id="content_label">
          Content
        </label>
      </div>
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}
