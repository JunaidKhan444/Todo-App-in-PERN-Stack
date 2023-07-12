/**
 * TODO_APP-PERN-STACK
 *
 * @author   Junaid Khan
 *
 */

import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  return <React.Fragment>
    <div className="container">
      <InputTodo />
      <ListTodo />
    </div>
  </React.Fragment>
}

export default App;
