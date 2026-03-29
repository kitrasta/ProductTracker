import { getProductStatus } from '../../utils/productUtils.jsx'
import styles from './ProductTable.module.css'

function ProductTable({ products }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th>Продукт</th>
          <th>Категория</th>
          <th>Срок годности</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const status = getProductStatus(product.expiryDate)
          return (
            <tr key={product.id} className={styles.row}>
              <td>
                <span>{product.icon}</span> <span>{product.name}</span>
              </td>
              <td>{product.category}</td>
              <td>
                до{' '}
                {new Date(product.expiryDate).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </td>
              <td>
                <StatusBadge status={status} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function StatusBadge({ status }) {
  const map = {
    expired: { label: 'Просрочен', className: styles.expired },
    warning: { label: 'Скоро испортится', className: styles.warning },
    ok: { label: 'В порядке', className: styles.ok },
  }

  const { label, className } = map[status] ?? map.ok
  return <span className={`${styles.badge} ${className}`}>{label}</span>
}

export default ProductTable
