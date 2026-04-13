import styles from './ProductFilters.module.css'


export default function ProductFilters() {
    return (
        <div className={styles.wrapper}>
            <input className={styles.search}
            type="text" 
            placeholder="Поиск..."
            name="search"
            id="search" />
            <select className={styles.select}
            name="category" id="category">
<option value="">Категория</option>
<option value="dairy">Молочные</option>
<option value="fruits">Фрукты</option>
<option value="meat">Мясо</option>
<option value="bakery">Выпечка</option>
<option value="other">Другое</option>
            </select>
            <select className={styles.select} 
            name="sort" 
            id="sort">
                <option value="date">Сортировка: по дате</option>
                <option value="name">Сортировка: по названию</option>
                <option value="status">Сортировка: по статусу</option>
            </select>
        </div>
    )
}