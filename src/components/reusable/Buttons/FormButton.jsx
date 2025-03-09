import Button from "@mui/material/Button";

export default function FormButton({ text }) {
  return (
    <>
      <Button variant="contained" type="submit">
        {text}
      </Button>
    </>
  );
}
