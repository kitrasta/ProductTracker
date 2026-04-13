import {CheckCircle, Clock, AlertCircle} from 'lucide-react'
import styles from './StatusCard.module.css'

interface Props {
    status:'ok' | 'soon' | 'expired'
    count: number
}

const config = {
    ok:{
        label: 'Всё свежее',
        icon: CheckCircle,
    },
    soon: {
        label: 'Скоро испортится',
        icon: Clock,
    },
    expired: {
        label: 'Просрочено',
        icon: AlertCircle,
    }
}

export default function StatusCard({status, count}: Props) {
    const {label, icon: Icon} = config[status]

    return (
        <div className={`${styles.card} ${styles[status]}`}>
            <Icon size={24} className={styles.icon} />
            <div className={styles.info}>
                <span className={styles.count}>{count}</span>
                <span className={styles.label}>{label}</span>
            </div>
        </div>
    )
}