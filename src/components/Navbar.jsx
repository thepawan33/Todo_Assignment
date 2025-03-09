import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color="inherit">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: ".8rem",
              }}
              to={"/main"}
            >
              Todo
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: ".8rem",
              }}
              to={"/signup"}
            >
              Sign up
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: ".8rem",
              }}
              to={"/login"}
            >
              Log in
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: ".8rem",
              }}
              to={"/cat"}
            >
              Cat Image
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
