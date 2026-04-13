import Nav from './Nav'
import ProfileMenu from './ProfileMenu'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ProductTracker</div>
            <Nav />
            <ProfileMenu />
        </header>
    )
}