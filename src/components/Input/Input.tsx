import style from './Input.module.css'

interface Props {
    id: string
    name: string
    type?: 'text' | 'number' | 'date' | 'email' | 'password'
    label?: string
    placeholder?: string
    value?: string | number
    defaultValue?: string | number
    min?: number
    error?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export default function Input({
    id,
    name,
    type = 'text',
    label,
    placeholder,
    value,
    defaultValue,
    min,
    error,
    onChange,
  }: Props) {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          min={min}
          onChange={onChange}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    )
  }