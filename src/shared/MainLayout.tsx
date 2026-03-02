import { NavLink, Outlet } from 'react-router-dom'

const getNavClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export const MainLayout = () => {
  return (
    <div className='layout'>
      <header className='header'>
        <nav className='nav'>
          <NavLink className={getNavClassName} to='/products'>
            Products
          </NavLink>
          <NavLink className={getNavClassName} to='/add'>
            Add
          </NavLink>
          <NavLink className={getNavClassName} to='/stats'>
            Stats
          </NavLink>
        </nav>
      </header>

      <main className='page'>
        <Outlet />
      </main>
    </div>
  )
}
