import products from '../../../../data/products.json'
import styles from './TableProducts.module.css'


export default function TableProducts() {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Мои Продукты</span>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Продукт</th>
                        <th>Категория</th>
                        <th>Срок годности</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>(
                         <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.expiryDate}</td>
                        <td>{product.status}</td>
                    </tr>
                    ))}
             
                </tbody>
            </table>

        </div>
    )
}