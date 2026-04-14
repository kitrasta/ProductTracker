import styles from './Select.module.css'

interface Option {
  value: string
  label: string
}

interface Props {
  id: string
  name: string
  label?: string
  options: Option[]
  placeholder?: string
  value?: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({
  id,
  name,
  label,
  options,
  placeholder,
  value,
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
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.select} ${error ? styles.selectError : ''}`}
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}