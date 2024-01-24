import React from 'react'
import ReactDOM from 'react-dom/client'

//import GlobalStyles from'./styles/global'
//import { ThemeProvider } from 'styled-components'
//import theme from './styles/theme.js'

import { Routes } from './routes'

//import { Home } from './pages/Home/index.jsx'
// colocar depois no theme provider wesse codigo: theme={theme)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <Routes />
    
  </React.StrictMode>,
)
