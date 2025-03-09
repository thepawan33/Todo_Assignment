import FormInput from "../reusable/Inputs/FormInput";
import { useSelector } from "react-redux";
import FormButton from "../reusable/Buttons/FormButton";
import styles from "./css/SignupComp.module.css";

import { useNavigate } from "react-router-dom";
import useAlertHandler from "../reusable/Alert/useAlertHandler";

import AlertComponent from "../reusable/Alert/AlertComponent";

export default function SignupComp() {
  const inputValue = useSelector((state) => state.auth.inputValue);
  const showAlert = useAlertHandler();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    sessionStorage.setItem("user", JSON.stringify(inputValue));
    showAlert(true, "success", "Congratulation Signup Successfull");
    setTimeout(() => {
      useNavigate("/login");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <AlertComponent />
      <div className={styles.formContainer}>
        <h2 className={styles.h2}> Sign Up</h2>
        <span className={styles.span}>It's quick and easy.</span>
        <form onSubmit={handleSignUpSubmit}>
          <FormInput
            label={"Name"}
            name={"name"}
            value={inputValue.name}
            type={"text"}
          />
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
            <FormButton text={"sing up"} />
          </div>
        </form>
      </div>
    </div>
  );
}
