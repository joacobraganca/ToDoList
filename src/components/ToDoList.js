import React, { Component } from "react";
import Tareas from "./Tareas";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { description: "Tarea 1" },
        { description: "Tarea 2" },
        { description: "Tarea 3" }
      ],
      description: ""
    };
  }

  changeDescription = ({ target: { value } }) =>
    this.setState({ description: value });

  addTask = event => {
    event.preventDefault();

    let { tasks, description } = this.state;

    if (description) {
      tasks = tasks.concat([{ description }]);

      this.setState({ tasks, description: "" });

      //this.setState(({ tasks }) => ({ tasks : tasks.concat([{ description }]), description: ""}));
    }
  };
  render() {
    const { tasks, description } = this.state;

    return (
      <div className="container mt-3">
        <h1>ToDo List!</h1>
        <form onSubmit={this.addTask}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Ingrese una tarea..."
                className="form-control"
                value={description}
                onChange={this.changeDescription}
              />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-block btn-primary">Agregar</button>
            </div>
          </div>
        </form>
        <Tareas tasks={tasks} />
      </div>
    );
  }
}

export default ToDoList;
