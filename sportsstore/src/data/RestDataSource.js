// 웹 서비스에 HTTP 요청을 전송하는 코드와 그 결과를 처리하는 코드를 통합해 이 파일에서 관리한다.
// 요청에 파라미터가 포함되도록 URL 공식을 작성한다.
// 이 파라미터는 페이지 요청과 카테고리 지정에 사용된다. 또한 Axios 패키지는 파라미터를 사용해 요청 URL에 쿼리 문자열을 추가한다.

import Axios from "axios";
import { RestUrls } from "./Urls";

class RestDataSource {
  // GetData 메서드의 결과는 웹 서비스로부터 응답을 수신할 때 이행되는 하나의 Promise다.
  GetData = async (dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params);

  // 주문 객체를 받아 웹 서비스로 전송하는 메서드를 추가한다.
  StoreData = (dataType, data) =>
    this.SendRequest("post", RestUrls[dataType], {}, data);

  SendRequest = (method, url, params, data) =>
    Axios.request({ method, url, params, data });
}

export default RestDataSource;
