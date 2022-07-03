// 상품 데이터를 로딩 처리하는 컴포넌트

import React, { Component } from "react";
import { DataTypes } from "../data/Types";

class DataGetter extends Component {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }

  componentDidUpdate = () => this.getData();
  componentDidMount = () => this.getData();

  getData = () => {
    const dsData = this.props.products_params || {};
    const rtData = {
      _limit: this.props.pageSize || 5,
      _sort: this.props.sortKey || "name",
      _page: this.props.match.params.page || 1,
      category_like:
        (this.props.match.params.category || "") === "all"
          ? ""
          : this.props.match.params.category,
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
      this.props.loadData(DataTypes.PRODUCTS, rtData);
    }
  };
}

export default DataGetter;

/*
이 컴포넌트는 children props를 사용해 부모가 제공한 콘텐츠를 시작 태그와 종료 태그 사이에서 렌더링한다.
이는 사용자에게 콘텐츠를 보여주는 역할이 아닌, 애플리케이션에 서비스를 제공하는 역할의 컴포넌트를 정의할 때 유용한 방법이다.
getData는 URL로부터 파라미터들을 가져와 데이터 스토어에 마지막으로 저장된 파라미터들과 비교한다.
만약 차이가 있다면 사용자가 요청한 데이터를 로딩할 새 액션이 부착된다.
URL로부터 가져온 카테고리와 페이지 번호 외에도, 새 액션은 _sort와 _limit라는 파라미터를 만들어 결과를 정렬하고 데이터의 개수를 설정할 수 있게 한다.
정렬과 데이터 개수 설정에는 데이터 스토어로부터 가져온 값이 사용된다.
*/
