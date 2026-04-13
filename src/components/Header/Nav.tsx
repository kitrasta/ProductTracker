import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const location = useLocation()

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link
            to="/"
            className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Мои продукты
          </Link>
        </li>
        <li>
          <Link
            to="/add"
            className={`${styles.link} ${location.pathname === '/add' ? styles.active : ''}`}
          >
            Добавить продукт
          </Link>
        </li>
        <li>
          <Link
            to="/statistics"
            className={`${styles.link} ${location.pathname === '/statistics' ? styles.active : ''}`}
          >
            Статистика
          </Link>
        </li>
      </ul>
    </nav>
  )
}