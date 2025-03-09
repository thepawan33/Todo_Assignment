import React, { useState } from "react";
import { Button, Box, Card, CardMedia, Typography } from "@mui/material";
import AlertComponent from "./reusable/Alert/AlertComponent";
import useAlertHandler from "./reusable/Alert/useAlertHandler";
import axios from "axios";

const CatComponent = () => {
  let [catImage, setCatImage] = useState(null);
  const showAlert = useAlertHandler();

  async function catImg() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );

      if (response) {
        const { data } = response;
        setCatImage(data[0].url);
        showAlert(true, "success", "New Cat Image");
      }
    } catch (error) {
      showAlert(true, "error", error.message);
    }
  }

  return (
    <Box sx={{ textAlign: "center", mt: 4, mb: 15 }}>
      <AlertComponent />
      <Typography variant="h4" gutterBottom>
        Random Cat Image
      </Typography>
      <Button onClick={catImg} variant="contained" sx={{ mb: 2 }}>
        Get Cat Image
      </Button>
      <Card sx={{ maxWidth: 400, mx: "auto", mt: 2 }}>
        <CardMedia
          component="img"
          image={
            catImage
              ? catImage
              : "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
          }
          alt="Random Cat"
        />
      </Card>
    </Box>
  );
};

export default CatComponent;
