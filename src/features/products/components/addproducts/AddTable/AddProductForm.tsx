import styles from './AddProductForm.module.css'
import Input from '../../../../../components/Input/Input'
import Button from '../../../../../components/Button/Button'
import Select from '../../../../../components/Select/Select'
import { categoryLabels } from '../../../../../types/category'

const categoryOptions = Object.entries(categoryLabels).map(([value, label]) => ({
  value,
  label,
}))

export default function AddProductForm() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Добавить продукт</h3>
      <span className={styles.subtitle}>Заполните информацию о продукте</span>
      <form className={styles.form}>
        <Input
          id="name"
          name="name"
          label="Название продукта"
          placeholder="Введите название..."
        />

        <Select
          id="category"
          name="category"
          label="Категория"
          placeholder="Выберите категорию"
          options={categoryOptions}
        />

        <Input
          id="purchaseDate"
          name="purchaseDate"
          type="date"
          label="Дата покупки"
        />

        <Input
          id="expiryDate"
          name="expiryDate"
          type="date"
          label="Срок годности"
        />

        <Input
          id="quantity"
          name="quantity"
          type="number"
          label="Количество"
          min={1}
          defaultValue={1}
        />

        <div className={styles.buttons}>
          <Button type="submit" variant="primary">Добавить продукт</Button>
          <Button type="button" variant="secondary">Отмена</Button>
        </div>
      </form>
    </div>
  )
}