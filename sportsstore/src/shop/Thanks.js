// 사용자에게 주문이 확정되고 결제 절차가 완료됐음을 알린다.

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Thanks extends Component {
  render() {
    return (
      <div>
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
        <div className="m-2 text-center">
          <h2>Thanks!</h2>
          <p>Thanks for placing your order.</p>
          <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
          <p>We'll ship your goods as soon as possible.</p>
          <Link to="/shop" className="btn btn-primary">
            Return to Store
          </Link>
        </div>
      </div>
    );
  }
}

export default Thanks;

// order 객체의 id 프로퍼티 값을 포함하는 간략한 메시지를 보여준다.
// 이 컴포넌트는 데이터 스토어에 연결될 것이며, 그 안의 order 객체는
// RESTful 웹 서비스에 의해 할당된 id값을 갖게 될 것이다.
