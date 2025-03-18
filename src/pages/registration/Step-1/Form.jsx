import styles from "./Form.module.scss";
import { useState, useEffect } from "react";
import { PrsData } from "./for-map/PersonalData";
import { Address } from "./for-map/Address";
// import { useForm } from "react-hook-form";

export function Form({ onChange }) {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await fetch("http://localhost:8080/dict/grades");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        console.log("Ответ API:", data);

        setGrades(data.message || []);
      } catch (error) {
        console.error("Ошибка при получении списка:", error);
        setGrades([]);
      }
    };

    fetchGrades();
  }, []);

  const formMap = (expConst) => {
    return expConst.map((item) => (
      <div key={item.id} className={styles.form_field}>
        <p>
          {item.name} <span>*</span>
        </p>

        <div className={styles.form_back}>
          <input type={item.tp} placeholder={item.pcholder} required />
        </div>

        {item.name === "Город" && (
          <div className={styles.checkbox}>
            <input type="checkbox" required />
            <label>Являюсь жителем сельской местности</label>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className={styles.container}>
        <form>
          <h4 className={styles.head_form}>Персональные данные</h4>

          <div key={1} className={styles.form_field}>
            <p>
              Кем Вы являетесь при регистрации? <span>*</span>
            </p>

            <div className={styles.form_back}>
              <select className={styles.like_input} aria-label="Выбор роли">
                <option value="">Выберите вариант</option>
                {grades.map((grade) => (
                  <option key={grade.id} value={grade.id}>
                    {grade.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {formMap(PrsData)}
          <h4 className={styles.head_form}>
            Детальная информация о месте проживания
          </h4>
          {formMap(Address)}
          <div className={styles.house_and_ap}>
            <div className={styles.form_back}>
              <input type="text" placeholder="Дом" />
            </div>
            <div className={styles.form_back}>
              <input type="text" placeholder="Квартира" />
            </div>
          </div>
          <div className={styles.back_and_forth}>
            <button onClick={() => onChange("step1")}>Предыдущий шаг</button>
            <button onClick={() => onChange("step2")}>Следующий шаг</button>
          </div>
        </form>
      </div>
    </>
  );
}
