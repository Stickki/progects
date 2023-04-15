import { useState } from "react";
import styles from "../styles/validate.module.css";
import { useNavigate } from "react-router-dom";


const Validate = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const checkValidate = (event) => {
    event.preventDefault();
    const { email, password } = data;
    if (email === "1111" && password === "1111") {
      navigate("/admin");
    } else {
      alert("Неправильный email или пароль.");
    }
  };

  return (


    <div className={styles.head}>
      <div className={styles.wrapper}>
        <form className={styles.validate} onSubmit={checkValidate}>
          <h3 className={styles.h3}>ВВЕДИТЕ ДАННЫЕ</h3>
          <div className={styles.inputs}>
            <div className={styles.email}>
              <input
                type="text"
                placeholder="E-mail"
                className={styles.input}
                value={data.email}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
              />
            </div>
            <div className={styles.password}>
              <input
                type="password"
                placeholder="Пароль"
                className={styles.input}
                value={data.password}
                onChange={(event) =>
                  setData({ ...data, password: event.target.value })
                }
              />
            </div>
          </div>
            <button className={styles.btnOpen}>ВОЙТИ</button>
        </form>
      </div>
    </div>
  );
};

export default Validate;