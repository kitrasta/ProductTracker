import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <div className={styles['logo-image']}></div>
        <span>Трекер Срока Годности</span>
      </div>
      <nav className={styles['nav']}>
        <ul className={styles['nav-items']}>
          <li className={styles['nav-item']}>  
            <NavLink to='/' className={({ isActive }) => isActive ? `${styles['link']} ${styles['active']}` : styles['link']}>
              Мои продукты
            </NavLink></li>
          <li className={styles['nav-item']}> 
            <NavLink to='/add' className={({ isActive }) => isActive ? `${styles['link']} ${styles['active']}` : styles['link']}>
              Добавить продукты
            </NavLink></li>
          <li className={styles['nav-item']}>
            <NavLink to='/statistics' className={({ isActive }) => isActive ? `${styles['link']} ${styles['active']}` : styles['link']}>
              Статистика
            </NavLink></li>
        </ul>
      </nav>
      <div className={styles['profile']}>Профиль</div>

    </header>
  )
}

export default Navbar