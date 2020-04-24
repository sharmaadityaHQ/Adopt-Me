import React from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import { Router } from '@reach/router'
import Details from './Details'
import { Provider } from 'react-redux'
import NavBar from './NavBar'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
