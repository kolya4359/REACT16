// 에러 메시지를 보여줄 컴포넌트

import React, { Component } from "react";

class ValidationError extends Component {
  render() {
    if (this.props.errors) {
      return this.props.errors.map((err) => (
        <h6 className="text-danger" key={err}>
          {err}
        </h6>
      ));
    }
    return null;
  }
}

export default ValidationError;
