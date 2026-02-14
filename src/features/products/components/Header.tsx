import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="logo">
        Трекер Срока Годности
      </div>
      <nav>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/dashboard">Мои продукты</Link>
          </li>
          <li className="nav-item">
            <Link to="/add">Добавить продукт</Link>
          </li>
          <li className="nav-item">
            <Link to="/statistic">Статистика</Link>
          </li>
        </ul>
      </nav>
      <div className="profile">Профиль</div>
    </header>
  );
}