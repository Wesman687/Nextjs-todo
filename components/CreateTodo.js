import React, { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });
  async function handleSubmit() {
    const docRef = await addDoc(collection(db, "todos"), todo)
    setTodo({
        title: "",
        detail: ""
    })
  }
  return (
    <>
      <form>
        <label>Title:</label>
        <br />
        <input
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          value={todo.title}
        ></input>
        <br />
        <label>Detail:</label>
        <br />
        <textarea
          value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
        ></textarea>
      </form>
      <button onClick={handleSubmit} >Add Todo</button>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
