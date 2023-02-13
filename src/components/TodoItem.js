import React, { Fragment } from "react";

const TodoItem = (props) => {
  // style
  const todoItemStyle = {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: props.state ? "line-through" : "none",
  };

  const deleteButtonStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const boxCheck = () => {
    props.onCheck(props.id);
  };

  const deleteCheck = () => {
    props.onDelete(props.id);
  };

  // return
  return (
    <Fragment>
      <p style={todoItemStyle}>
        <input type="checkbox" onChange={boxCheck} checked={props.state} />
        {props.item}
        <button style={deleteButtonStyle} onClick={deleteCheck}>
          Delete
        </button>
      </p>
    </Fragment>
  );
};

export default TodoItem;
