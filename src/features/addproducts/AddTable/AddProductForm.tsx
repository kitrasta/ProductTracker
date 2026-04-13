import styles from './AddProductForm.module.css'

export default function AddProductForm() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Добавить продукт</h3>
      <span className={styles.subtitle}>Заполните информацию о продукте</span>
      <form className={styles.form}>
        <label htmlFor="name">Название продукта</label>
        <input
          id="name"
          name="name"
          className={styles.input}
          type="text"
          placeholder="Введите название продукта..."
        />

        <label htmlFor="category">Категория</label>
        <select id="category" name="category" className={styles.select}>
          <option value="">Выберите категорию</option>
          <option value="dairy">Молочные</option>
          <option value="fruits">Фрукты</option>
          <option value="meat">Мясо</option>
          <option value="bakery">Выпечка</option>
          <option value="other">Другое</option>
        </select>

        <label htmlFor="purchaseDate">Дата покупки</label>
        <input
          id="purchaseDate"
          name="purchaseDate"
          className={styles.input}
          type="date"
        />

        <label htmlFor="expiryDate">Срок годности</label>
        <input
          id="expiryDate"
          name="expiryDate"
          className={styles.input}
          type="date"
        />

        <label htmlFor="quantity">Количество</label>
        <input
          id="quantity"
          name="quantity"
          className={styles.input}
          type="number"
          min="1"
          defaultValue={1}
        />

        <div className={styles.buttons}>
          <button type="submit" className={styles.btnPrimary}>
            Добавить продукт
          </button>
          <button type="button" className={styles.btnSecondary}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  )
}