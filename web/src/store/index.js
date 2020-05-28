import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import reducers from  'reducer/index'

const store = createStore(
  reducers, 
  compose(
    applyMiddleware(
      thunkMiddleware, // 允许我们 dispatch() 函数
      loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store