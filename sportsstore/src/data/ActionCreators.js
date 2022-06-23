// 액션 생성자 정의
// 액션 생성자는 데이터 스토어가 데이터를 변경하기 위해 처리하는 액션 객체를 생성한다.
import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});
