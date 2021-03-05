import React, { Component } from "react";

import todo from "./ToDosData.js";
import TodoItem from "./ToDoItem.js";
class newApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""}
  }
callAPI(){
  fetch("http://localhost:9000/testAPI").then(res => res.text().then(res => this.setState({apiResponse:res})))
}
componentWillMount(){
  this.callAPI()
}
}
class App extends Component {
  constructor() {
    super();
    
    this.state = { todos: todo, character: {} };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(key) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map((todo) => {
        if (todo.key === key) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodo,
      };
    });
  }
  handleClick(){
    
      let getDatabaseInfo = "hello";

  }
 
  render() {
    const item = todo.map((eItem) => {
      return (
        <TodoItem
          handleChange={this.handleChange}
          key={eItem.key}
          item={eItem}
        />
      );
    });

    
    return <div>{item}    

      <button onClick={this.handleClick}>
        Create a new todo Item
      </button>
    
    
    
    </div>;
  }
}

export default App;
