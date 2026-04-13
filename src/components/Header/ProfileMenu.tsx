import styles from './ProfileMenu.module.css'

export default function ProfileMenu() {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}></div>
      <span>Профиль</span>
    </div>
  )
}