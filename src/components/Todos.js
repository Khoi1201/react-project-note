import React, { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Todos = () => {
  const [todosState, setTodosState] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        setTodosState(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getTodos();
  }, []);

  const changeState = (id) => {
    const newTodos = todosState.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodosState(newTodos);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete("https://jsonplaceholder.typicode.com/todos/" + id);
      const newTodos = todosState.filter((todo) => todo.id !== id);
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addTodo = async (title) => {
    // const newTodos = [...todosState, { title, completed: false, id: uuidv4() }];
    // setTodosState(newTodos);

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      const newTodos = [...todosState, res.data];
      setTodosState(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <AddTodo onAdd={addTodo} />
      {todosState.map((todo, index) => (
        <TodoItem
          item={todo.title}
          onCheck={changeState}
          key={index}
          id={todo.id}
          state={todo.completed}
          onDelete={deleteTodo}
        />
      ))}
    </Fragment>
  );
};

export default Todos;
