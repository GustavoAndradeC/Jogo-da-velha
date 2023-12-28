import React from 'react'
import ReactDOM from 'react-dom/client'
import Hash from './Hash'
import { GlobalStyle } from './Components/ComponentsStyled'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Hash />
    </>
  </React.StrictMode>,
)
