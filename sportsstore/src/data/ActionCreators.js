// 액션 생성자 정의
// 액션 생성자는 데이터 스토어가 데이터를 변경하기 위해 처리하는 액션 객체를 생성한다.
import { ActionTypes, DataTypes } from "./Types";
// 임시 데이터
// import { data as phData } from "./placeholderData";
import RestDataSource from "./RestDataSource";

const dataSource = new RestDataSource();

// 데이터 스토어가 받는 응답에 파라미터와 추가 정보가 포함되도록 한다.
export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource.GetData(dataType, params).then((response) => ({
    dataType,
    data: response.data,
    total: Number(response.headers["x-total-count"]),
    params,
  })),
});
/*
미들웨어에 의해 Promise가 이행되면 리듀서로 전송된 액션 객체엔 payload.total과 payload.params 프로퍼티가 포함된다.
total 프로퍼티에는 X-Total-Count 헤더의 값이 포함돼 있으며, 이는 추후 페이지네이션을 이용한 내비게이션 제어에 사용된다.
params 프로퍼티는 요청을 만들 때 사용되는 파라미터가 포함된다. 이 파라미터는 사용자의 요청에 따라 추가 데이터에 대한 HTTP 요청을 만들 때 사용된다.
*/

export const setPageSize = (newSize) => ({
  type: ActionTypes.DATA_SET_PAGESIZE,
  payload: newSize,
});

export const setSortProperty = (newProp) => ({
  type: ActionTypes.DATA_SET_SORT_PROPERTY,
  payload: newProp,
});

// 웹 서비스로 주문을 전송하기 위해 Promise를 사용하는 새 액션 생성자를 추가한다.
// 웹 서비스는 저장된 데이터를 리턴할 것이며, 거기엔 유일한 식별자가 포함돼 있을 것이다.
export const placeOrder = (order) => ({
  type: ActionTypes.DATA_STORE,
  payload: dataSource.StoreData(DataTypes.ORDERS, order).then((response) => ({
    dataType: DataTypes.ORDERS,
    data: response.data,
  })),
});
