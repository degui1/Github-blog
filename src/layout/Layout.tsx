import { Outlet } from 'react-router'
import { LayoutContainer } from './styles'
import { Cover } from '../components/Cover/Cover'

export function Layout() {
  return (
    <LayoutContainer>
      <Cover />
      <Outlet />
    </LayoutContainer>
  )
}
