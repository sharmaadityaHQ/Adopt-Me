import React, { useState } from 'react'
import SearchParams from './SearchParams'
import Details from './Details'
import { Router } from '@reach/router'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'
import { render } from 'react-dom'

const App = () => {
  const themeHook = useState('darkblue')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById('root'))
