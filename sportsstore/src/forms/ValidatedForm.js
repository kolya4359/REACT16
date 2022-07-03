// 프로그래밍에 필요한 필드를 생성하며 검증될 수 있는, 재사용 가능한 폼을 만든다.

import React, { Component } from "react";
import ValidationError from "./ValidationError";
import GetMessages from "./ValidationMessages";

class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {},
    };
    this.formElements = {};
  }

  handleSubmit = () => {
    this.setState(
      (state) => {
        const newState = { ...state, validationErrors: {} };
        Object.values(this.formElements).forEach((elem) => {
          if (!elem.checkValidity()) {
            newState.validationErrors[elem.name] = GetMessages(elem);
          }
        });
        return newState;
      },
      () => {
        if (Object.keys(this.state.validationErrors).length === 0) {
          const data = Object.assign(
            ...Object.entries(this.formElements).map((e) => ({
              [e[0]]: e[1].value,
            }))
          );
          this.props.submitCallback(data);
        }
      }
    );
  };

  registerRef = (element) => {
    if (element !== null) {
      this.formElements[element.name] = element;
    }
  };

  renderElement = (modelItem) => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="form-group" key={modelItem.label}>
        <label>{modelItem.label}</label>
        <ValidationError errors={this.state.validationErrors[name]} />
        <input
          className="form-control"
          name={name}
          ref={this.registerRef}
          {...this.props.defaultAttrs}
          {...modelItem.attrs}
        />
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.props.formModel.map((m) => this.renderElement(m))}
        <div className="text-center">
          <button
            className="btn btn-secondary m-1"
            onClick={this.props.cancelCallback}
          >
            {this.props.cancelText || "Cancel"}
          </button>
          <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
            {this.props.submitText || "Submit"}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ValidatedForm;

// 하나의 데이터 모델을 받아, 이를 사용해 HTML5 API를 통해 유효성이 검증되는 폼을 만든다.
// 폼 엘리먼트 각각은 레이블과 ValidationError 컴포넌트를 포함해 렌더링되는데, ValidationError는
// 사용자에게 유효성 검증 결과 메시지를 보여주는 컴포넌트이다.
// 이 폼은 또한 props로 제공된 콜백 함수를 사용해 폼을 취소하거나 제출할 수 있는 버튼을 보여준다.
// submitCallback 함수는 반드시 모든 엘리먼트가 유효성 조건을 통과해야만 호출된다.
// submitCallback 함수가 호출되면 프로퍼티 이름은 name 속성 값이며 프로퍼티 값은 사용자가
// 입력한 데이터인 객체 하나를 받게 될 것이다.
