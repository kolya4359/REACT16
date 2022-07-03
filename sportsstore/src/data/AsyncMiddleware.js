// Promise인 payload를 갖는 액션을 만든다.
// 미들웨어는 Promise가 이행될 때까지 기다린 다음, Promise의 결과를 payload로 사용해 액션을 전달할 것이다.

// 액션의 payload가 Promise인지를 판단한다.
// payload가 함수나 객체인지, 그렇다면 then 함수를 갖고 있는지 확인한다.
const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function";

// 데이터 스토어의 미들웨어로 사용된다.
// 이 함수는 Promise의 이행을 기다리기 위해 then 함수를 호출하는데, 이때 next 함수를 사용해 payload의 값을 result로 대체해 전달한다.
// next 함수는 데이터 스토어의 정상적인 경로를 거치게 한다. 반면에 Promise가 아닌 payload를 갖는 액션은 그대로 전달된다.
const asyncActions = () => (next) => (action) => {
  if (isPromise(action.payload)) {
    action.payload.then((result) => next({ ...action, payload: result }));
  } else {
    next(action);
  }
};

export default asyncActions;
