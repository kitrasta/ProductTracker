import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddProductsPage.css'

const categories = [
  'Молочные продукты',
  'Фрукты',
  'Овощи',
  'Мясо',
  'Выпечка',
  'Напитки',
  'Другое'
]

function AddProductsPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    category: '',
    purchaseDate: '',
    expiryDate: '',
    quantity: 1,
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleQuantity(delta) {
    setForm(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }))
  }

  function handleSubmit() {
    console.log('Новый продукт:', form)
    navigate('/')
  }

  return (
    <div className='page'>
      <div className='form-card'>
        <div className='form-left'>
          <h2 className='form-title'>Добавить Продукт</h2>
          <p className='form-subtitle'>Заполните информацию о продукте</p>

          <div className='field'>
            <label>🧂 Название</label>
            <input
              type='text'
              name='name'
              placeholder='Название'
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className='field'>
            <label>🌀 Категория</label>
            <select
              name='category'
              value={form.category}
              onChange={handleChange}
            >
              <option value=''>Выберите категорию</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className='field-row'>
            <div className='field'>
              <label>📅 Дата покупки</label>
              <input
                type='date'
                name='purchaseDate'
                value={form.purchaseDate}
                onChange={handleChange}
              />
            </div>
            <div className='field'>
              <label>📅 Срок годности</label>
              <input
                type='date'
                name='expiryDate'
                value={form.expiryDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='field'>
            <label>🧺 Количество</label>
            <div className='quantity'>
              <span>{form.quantity}</span>
              <button onClick={() => handleQuantity(-1)}>−</button>
              <button onClick={() => handleQuantity(1)}>+</button>
            </div>
          </div>

          <div className='form-actions'>
            <button className='btn-primary' onClick={handleSubmit}>
              Добавить продукт
            </button>
            <button className='btn-secondary' onClick={() => navigate('/')}>
              Отмена
            </button>
          </div>
        </div>

        <div className='form-right'>
          <div className='upload-area'>
            <span className='upload-icon'>☁️</span>
            <p>Загрузить фото чека</p>
            <button className='btn-upload'>Загрузить фото</button>
            <p className='upload-hint'>JPG, PNG или PDF. Макс. 10МБ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductsPage