import { ThemeProvider } from 'styled-components'
import { Blog } from './pages/Blog/Blog'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Blog />
    </ThemeProvider>
  )
}
