/*
많은 경우에 개발 애플리케이션과 운영 애플리케이션이 사용하는 URL이 다를 수 있다.
따라서 개별 자바스크립트 파일에 URL을 하드코딩하는 일은 피해야 한다. 
이 파일은 웹 서비스 접근에 필요한 URL을 한 장소에서 설정할 수 있게 해준다.
*/

import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
};
