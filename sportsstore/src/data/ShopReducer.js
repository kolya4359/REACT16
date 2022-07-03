// 리듀서 작성
// 리듀서란 데이터 스토어의 현재 콘텐츠와 액션 객체를 가져와 변경 작업을 수행하는 함수를 말한다.
import { ActionTypes, DataTypes } from "./Types";
export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_total`]: action.payload.total,
        [`${action.payload.dataType}_params`]: action.payload.params,
      };
    case ActionTypes.DATA_SET_PAGESIZE:
      return { ...storeData, pageSize: action.payload };
    case ActionTypes.DATA_SET_SORT_PROPERTY:
      return { ...storeData, sortKey: action.payload };

    // 결과를 처리하고 데이터 스토어에 주문을 추가하는 코드.
    case ActionTypes.DATA_STORE:
      if (action.payload.dataType === DataTypes.ORDERS) {
        return { ...storeData, order: action.payload.data };
      }
      break;
    default:
      return storeData || {};
  }
};
