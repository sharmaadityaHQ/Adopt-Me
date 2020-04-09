import React, { useState, lazy, Suspense } from 'react'
import { render } from 'react-dom'
import SearchParams from './SearchParams'
import { Router } from '@reach/router'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'

const Details = lazy(() => import('./Details'))

const App = () => {
  const themeHook = useState('darkblue')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>loading route ...</h1>}>
          <Router>
            <SearchParams path='/' />
            <Details path='/details/:id' />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById('root'))
