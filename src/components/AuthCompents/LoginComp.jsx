import styles from "./css/SignupComp.module.css";
import FormButton from "../reusable/Buttons/FormButton";
import FormInput from "../reusable/Inputs/FormInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAlertHandler from "../reusable/Alert/useAlertHandler";

import AlertComponent from "../reusable/Alert/AlertComponent";

export default function LoginComp() {
  const navigate = useNavigate();
  const inputValue = useSelector((state) => state.auth.inputValue);
  const showAlert = useAlertHandler();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));

    if (storedUser) {
      if (
        inputValue.email == storedUser.email &&
        inputValue.password == storedUser.password
      ) {
        sessionStorage.setItem("user_login", true);
        showAlert(true, "success", "Login Successfull :)  ");
        setTimeout(() => {
          navigate("/main");
        }, 1000);
      } else {
        showAlert(true, "error", " Invailid Credentials");
      }
    }
  };

  function checkClick() {
    showAlert(true, "error", "Please Invailid Credentials");
  }

  return (
    <div className={styles.container}>
      <AlertComponent />
      <div className={styles.formContainer}>
        <h2 className={styles.h2}> Log In </h2>
        <span className={styles.span}>It's quick and easy.</span>

        <form onSubmit={handleLoginUser}>
          <FormInput
            label={"Email"}
            name={"email"}
            value={inputValue.email}
            type={"email"}
          />
          <FormInput
            label={"Password"}
            name={"password"}
            value={inputValue.password}
            type={"password"}
          />
          <div className={styles.button}>
            <FormButton text={"Log In"} />
          </div>
        </form>
      </div>
    </div>
  );
}
