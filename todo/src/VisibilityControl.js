import React, { Component } from "react";

class VisibilityControl extends Component {
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={this.props.isChecked}
          onChange={(e) => this.props.callback(e.target.value)}
        />
        <label className="form-check-label">
          Show {this.props.description}
        </label>
      </div>
    );
  }
}

export default VisibilityControl;
