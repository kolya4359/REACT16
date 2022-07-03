// 리덕스 스토어 생성
import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import asyncActions from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer),
  applyMiddleware(asyncActions)
);

// CommonReducer 함수를 사용해 ShopReducer와 CartReducer를 조합할 수 있도록 한다.
