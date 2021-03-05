import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input onChange={() => props.handleChange(props.item.key)} type="checkbox" checked = {props.item.completed} />
      <p style = {props.item.completed ? {color:"red"}: {color: "blue"}}>   here is the key{props.item.completed}</p>
    </div>
  );
}
export default TodoItem;
