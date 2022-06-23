// 각 리듀서가 전체 데이터 스토어에 접근할 수 있게 한다.
export const CommonReducer =
  (...reducers) =>
  (storeData, action) => {
    for (let i = 0; i < reducers.length; i++) {
      let newStore = reducers[i](storeData, action);
      if (newStore !== storeData) {
        return newStore;
      }
    }
    return storeData;
  };
