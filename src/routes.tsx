import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Blog } from './pages/Blog/Blog'

export const Routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
    ],
  },
])
