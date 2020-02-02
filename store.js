import {createStore, applyMiddleware} from "redux";
//
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'

import reducer from "./reducers";
// 创建store
export function makeStore(initialState) {
    initialState = initialState || reducer()
    //保存日志
    const middlewares = [logger]
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

    return createStore(reducer, initialState, enhancer)
}