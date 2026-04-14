import styles from './Button.module.css'

interface Props {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'danger'
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    disabled?: boolean 
}

export default function Button({
    children,
    variant = 'primary',
    type = 'button',
    onClick,
    disabled = false,
}: Props) {
    return (
        <button
        type={type}
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
        </button>
    )
} 