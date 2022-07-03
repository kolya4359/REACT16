import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ShopActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import Shop from "./Shop";
import * as CartActions from "../data/CartActionCreators";
import CartDetails from "./CartDetails";
import DataGetter from "../data/DataGetter";
import Checkout from "./Checkout";
import Thanks from "./Thanks";

const mapDispatchToProps = { ...ShopActions, ...CartActions };

// 데이터를 서버에서 받아오므로 임시 파일을 카테고리 별로 나누는 기능은 필요 없다.
// const filterProducts = (products = [], category) =>
//   !category || category === "All"
//     ? products
//     : products.filter(
//         (p) => p.category.toLowerCase() === category.toLowerCase()
//       );

export const ShopConnector = connect(
  (ds) => ds,
  mapDispatchToProps
)(
  class extends Component {
    selectComponent = (routeProps) => {
      const wrap = (Component, Content) => (
        <Component {...this.props} {...routeProps}>
          {Content && wrap(Content)}
        </Component>
      );
      switch (routeProps.match.params.section) {
        case "products":
          return wrap(DataGetter, Shop);
        case "cart":
          return wrap(CartDetails);
        case "checkout":
          return wrap(Checkout);
        case "thanks":
          return wrap(Thanks);
        default:
          return <Redirect to="/shop/products/all/1" />;
      }
    };

    render() {
      return (
        <Switch>
          <Redirect
            from="/shop/products/:category"
            to="/shop/products/:category/1"
            exact={true}
          />
          <Route
            path={"/shop/:section?/:category?/:page?"}
            render={(routeProps) => this.selectComponent(routeProps)}
          />
        </Switch>
      );
    }

    componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
  }
);

/*
첫 번째 Redirect의 경우 카테고리만 있는 URL의 경우 해당 카테고리의 첫 페이지로 리다이렉션한다.
from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } 부분
*/
