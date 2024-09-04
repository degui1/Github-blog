import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <RouterProvider router={Routes} />
    </ThemeProvider>
  )
}
