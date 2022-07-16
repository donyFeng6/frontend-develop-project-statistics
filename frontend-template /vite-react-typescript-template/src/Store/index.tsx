import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import rootReducer from './rootReducer'

// const middlewares = [thunk, createLogger()]
const middlewares = [thunk]

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

export default store
