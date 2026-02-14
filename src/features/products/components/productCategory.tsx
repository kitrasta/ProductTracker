export function ProductCategory() {
  return (
    <section className="product-category">
      <h2>Мои продукты</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Срок годности</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Молоко</td>
            <td>Молочные продукты</td>
            <td>15.02.2025</td>
            <td>Скоро испортится</td>

          </tr>
          <tr>
            <td>Хлеб</td>
            <td>Выпечка</td>
            <td>14.02.2025</td>
            <td>Просрочено</td>

          </tr>
          <tr>
            <td>Яйца</td>
            <td>Молочные продукты</td>
            <td>28.02.2025</td>
            <td>В порядке</td>

          </tr>
        </tbody>
      </table>
    </section>
  );
}