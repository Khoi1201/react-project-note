import React, { useState } from "react";

const AddTodo = (props) => {
  const [inputValue, setInputValue] = useState("");

  const addTodoFormStyle = {
    display: "flex",
  };
  const addTodoInputStyle = {
    flex: "10",
    padding: "5px",
  };

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };
  const submitInput = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      props.onAdd(inputValue);
      setInputValue("")
  
    }
  };

  return (
    <form style={addTodoFormStyle} onSubmit={submitInput}>
      <input
        type="text"
        name="title"
        placeholder="Thêm việc"
        style={addTodoInputStyle}
        value={inputValue}
        onChange={changeInput}
      />
      <input type="submit" value="Thêm" className="btn" />
    </form>
  );
};

export default AddTodo;
