import StatusCard from '../StatusCard/StatusCard'
import styles from './StatusCards.module.css'

export default function StatusCards() {
  return (
    <div className={styles.wrapper}>
      <StatusCard status="soon" count={3} />
      <StatusCard status="expired" count={1} />
      <StatusCard status="ok" count={8} />
    </div>
  )
}