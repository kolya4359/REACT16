// 결제 처리를 위한 검증된 폼을 사용한다.

import React, { Component } from "react";
import ValidatedForm from "../forms/ValidatedForm";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attrs: { type: "email" } },
      { label: "Address" },
      { label: "City" },
      { label: "Zip/Postal Code", name: "zip" },
      { label: "Country" },
    ];
  }

  handleSubmit = (formData) => {
    const order = {
      ...formData,
      products: this.props.cart.map((item) => ({
        quantity: item.quantity,
        product_id: item.product.id,
      })),
    };
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/shop/thanks");
  };

  handleCancel = () => {
    this.props.history.push("/shop/cart");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand">SPORTS STORE</div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <ValidatedForm
              formModel={this.formModel}
              defaultAttrs={this.defaultAttrs}
              submitCallback={this.handleSubmit}
              cancelCallback={this.handleCancel}
              submitText="Place Order"
              cancelText="Return to Cart"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;

// ValidatedForm을 사용해 사용자에게 이름, 이메일, 주소를 입력할 필드를 보여준다.
// 모든 폼 엘리먼트에는 required 속성이 포함되며, 이메일 주소를 위한 input 엘리먼트의
// type 속성에는 email이 할당된다. 이들 필드는 HTML5 유효성 검증 API가 사용하며,
// 사용자가 모든 필드를 채우지 않았거나 유효한 이메일 주소를 입력하지 않았을 때엔
// 주문을 방지할 것이다. 이메일 주소의 경우 비록 형식만 검증하지만 말이다.

// 사용자가 요휴한 폼 데이터를 제출하면 handleSubmit 메서드가 호출된다. 이 메서드는
// 폼 데이터를 받아 카트의 상세 내용과 조합하고, placeOrder와 clearCart 액션 생성자를
// 호출한 다음 /shop/thanks라는 URL로 내비게이션한다.
