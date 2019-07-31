import React, { Component } from "react";

class Tarea extends Component {
  constructor() {
    super();

    this.state = {
      completed: false
    };
  }

  completeTask = () => {
    this.setState({ completed: true });
  };

  getColor = () => {
    const { completed } = this.state;

    return completed ? "success" : "warning";
  };

  render() {
    const { description } = this.props;

    const { completed } = this.state;

    return (
      <div className={`alert alert-${this.getColor()}`} role="alert">
        {description}
        {!completed && (
          <button
            type="button"
            className="close"
            style={{ outline: "none" }}
            aria-label="Close"
            onClick={this.completeTask}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
    );
  }
}

export default Tarea;
