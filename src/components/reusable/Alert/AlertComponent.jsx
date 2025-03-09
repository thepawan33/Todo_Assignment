import { Snackbar, Alert } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { handleAlert } from "../../../redux/slices/alertSlice";

export default function AlertComponent() {
  const dispatch = useDispatch();
  const alertDetail = useSelector((state) => state.alert.alert);

  const handleClose = () => {
    dispatch(handleAlert({ open: "", severity: "", message: "" }));
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={alertDetail.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertDetail.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertDetail.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
