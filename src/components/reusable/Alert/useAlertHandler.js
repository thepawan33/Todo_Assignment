import { useDispatch } from "react-redux";
import { handleAlert } from "../../../redux/slices/alertSlice";
export default function useAlertHandler() {
  const dispatch = useDispatch();
  return (open, severity, message) => {
    dispatch(handleAlert({ open: open, severity: severity, message: message }));
  };
}
