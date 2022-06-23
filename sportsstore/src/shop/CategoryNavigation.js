import React, { Component } from "react";
// import { Link } from "react-router-dom";
import ToggleLink from "../ToggleLink";

class CategoryNavigation extends Component {
  render() {
    return (
      <React.Fragment>
        <ToggleLink to={this.props.baseUrl} exact={true}>
          All
        </ToggleLink>
        {this.props.categories &&
          this.props.categories.map((cat) => (
            <ToggleLink
              key={cat}
              to={`${this.props.baseUrl}/${cat.toLowerCase()}`}
            >
              {cat}
            </ToggleLink>
          ))}
      </React.Fragment>
    );
  }
}

export default CategoryNavigation;

/*
categories prop을 통해 카테고리의 배열을 받아 배열이 정의돼 있는지 확인한 다음, map 메서드를 사용해
배열의 각 아이템을 위한 콘텐츠를 생성한다. 또한 map 메서드가 생성한 엘리먼트에 key 프로퍼티를 적용하면 배열의 변경 작업을
효율적으로 만들 수 있다.
리턴되는 결과는 각 카테고리에 대한 Link 컴포넌트로서, 배열로부터 받은 카테고리에 링크가 추가돼 사용자는 어떤 카테고리의
상품이든 선택할 수 있게 된다.
*/
