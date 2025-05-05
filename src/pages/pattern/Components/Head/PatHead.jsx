import styles from "./PatHead.module.scss";
import { HeaderPatt } from "../HeaderPatt/HeaderPatt";
import { Link } from "react-router-dom";

export function PatHead() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.blur_block}>
          <HeaderPatt />
          <Link to="/">
            <div className={styles.info_logo}>
              <img
                src="../../../../public/pattern/Logo.png"
                alt="#"
                height={85}
              ></img>
            </div>
          </Link>
          <div className={styles.block_in_right}>
            <div className={styles.info_block}>
              <div className={styles.info_text}>
                ВСЕРОССИЙСКАЯ ОЛИМПИАДА ПО ФИНАНСОВОЙ ГРАМОТНОСТИ
              </div>
              <Link to="/regisration">
                <button className={styles.info_btn}>Зарегистрироваться</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
