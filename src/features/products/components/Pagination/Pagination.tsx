import styles from './Pagination.module.css'

export default function Pagination() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.info}>1–5 из 12</span>
      <div className={styles.buttons}>
        <button className={styles.button}>←</button>
        <button className={`${styles.button} ${styles.active}`}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>3</button>
        <button className={styles.button}>→</button>
      </div>
    </div>
  )
}