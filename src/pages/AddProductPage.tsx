import { useState } from "react";
import type { FormEvent } from "react";
import { Header } from "../features/products/components/Header";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Логика добавления продукта — позже
  };

  return (
    <>
      <Header />
      <main className="add-product-page">
        <h1>Добавить продукт</h1>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-field">
            <label htmlFor="name">Название</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Например: Молоко"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="category">Категория</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Выберите категорию</option>
              <option value="Молочные продукты">Молочные продукты</option>
              <option value="Выпечка">Выпечка</option>
              <option value="Мясо и рыба">Мясо и рыба</option>
              <option value="Овощи и фрукты">Овощи и фрукты</option>
              <option value="Крупы и макароны">Крупы и макароны</option>
              <option value="Другое">Другое</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="expiry">Срок годности</label>
            <input
              id="expiry"
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Добавить</button>
        </form>
      </main>
    </>
  );
}