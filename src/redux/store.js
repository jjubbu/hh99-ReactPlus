import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {connectRouter} from "connected-react-router";

import User from "./modules/user";

export const history = createBrowserHistory();


//모듈(리듀서) 모아주기
const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history), //위에 선언한 히스토리에 라우터가 연결된다.
});

//미들웨어 준비, 미들웨어 여러개면 [미들웨어1, 미들웨어2, 미들웨어3 ...]
const middlewares = [thunk.withExtraArgument({history:history})]; //다른 인수를 넘겨주는 함수

// 현재 개발 환경 (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// logger = 개발환경에서 로그를 찍어줌 
if (env === "development") {
  const { logger } = require("redux-logger"); //== import{logger}from "redux-logger"
  middlewares.push(logger);
}

//리덕스 데브툴(개발자도구 툴) 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose
;

//미들웨어 묶기
const enhancer = composeEnhancers(//아래의 미들웨어를 다시 묶어줌
    applyMiddleware(...middlewares)//모든 미들웨어를 사용한다
);

//루트리듀서+미들웨어들 로 스토어 생성, 내보내기
let store = (initialStore) => createStore(rootReducer, enhancer);
export default store();