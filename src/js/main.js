import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Index from './containers/Index.js'
import App from './containers/App.js'
import pollReducer from './reducers/pollReducer.js'

const reducers = combineReducers({
  poll: pollReducer
})

var store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Index} />
      <Route path="/question" component={App} />
    </Router>
  </Provider>
, document.getElementById('app'))
