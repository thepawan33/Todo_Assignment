import { Box, Container, Typography, IconButton } from "@mui/material";
import { Email, LinkedIn, GitHub, Language } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: " rgb(128, 128, 128)",
        color: "#fff",
        py: 2,
        textAlign: "center",
        pb: 5,
      }}
    >
      <Container>
        <Typography variant="body1">© 2025 Pavan Singh</Typography>
        <Box mt={1}>
          <IconButton href="https://ps-personal.netlify.app/" color="inherit">
            <Language />
          </IconButton>

          <IconButton href="mailto:thepawan33@gmail.com" color="inherit">
            <Email />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/pavan-singh-44172b243"
            target="_blank"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href="https://github.com/thepawan33"
            target="_blank"
            color="inherit"
          >
            <GitHub />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
