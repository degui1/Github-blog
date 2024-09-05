import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Blog } from './pages/Blog/Blog'
import { Post } from './pages/Post/Post'

export const Routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/post',
        element: <Post />,
      },
    ],
  },
])
