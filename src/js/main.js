import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'

import App from './containers/App.js'
import pollReducer from './reducers/pollReducer.js'

var reducers = combineReducers({
  poll: pollReducer
})
var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('app'))
