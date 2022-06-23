// 리듀서 작성
// 리듀서란 데이터 스토어의 현재 콘텐츠와 액션 객체를 가져와 변경 작업을 수행하는 함수를 말한다.
import { ActionTypes } from "./Types";
export const ShopReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
      };
    default:
      return storeData || {};
  }
};
