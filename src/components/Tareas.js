import React, { Component } from "react";
import Tarea from "./Tarea";

class Tareas extends Component {
  render() {
    const { tasks } = this.props;

    return tasks.map((task, index) => (
      <React.Fragment key={index}>
        <hr />
        <Tarea description={task.description} />
      </React.Fragment>
    ));
  }
}

export default Tareas;
