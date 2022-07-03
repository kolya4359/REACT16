// 페이지네이션 제어 기능을 스토어 안의 상품 데이터에 연결한다.

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = (dataStore) => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount:
    Math.ceil(dataStore.products_total | dataStore.pageSize || 5) /
    (dataStore.pageSize || 5),
  navigateToPage: (page) =>
    router.history.push(
      `/shop/products/${router.match.params.category}/${page}`
    ),
});

export const ProductPageConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );

/*
props를 통해 다른 컴포넌트에게 기능을 제공하는, 이른바 고차 컴포넌트 (HOC, Higher-Order Component)를 만든다.
ProductPageConnector가 바로 HOC이며, 데이터 스토어 프로퍼티, 액션 생성자, 라우팅 관련 파라미터를 조합해
페이지네이션 제어 컴포넌트에 필요한 기능을 제공한다.
withRouter는 connect의 대응 관계로서 리액트 라우터 패키지가 제공하는 함수이며, 가장 근접한 Route로부터
가져온 상세 정보를 컴포넌트에 제공한다.
*/
