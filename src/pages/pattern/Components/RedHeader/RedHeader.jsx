import styles from "./RedHeader.module.scss";
import { Link } from "react-router-dom";

export function RedHeader() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link to={"/"}>Новости</Link>
          </li>
          <li>
            <Link to={"/"}>Контакты</Link>
          </li>
          <li>
            <Link to="/documents">Документы</Link>
          </li>
          <li>
            <Link to="/Qapage">Вопросы и ответы</Link>
          </li>
          <li>
            <a href="#">Участникам</a>
          </li>
          <li>
            <Link to="/partners">Партнёры</Link>
          </li>
          <li>
            <Link to="/organizators">Организаторы</Link>
          </li>
          <li>
            <Link to={"/"}>Этапы проведения</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
