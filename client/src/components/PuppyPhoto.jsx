import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Paper from "@mui/material/Paper"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

const PuppyPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setPhotoUrl(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching puppy photo:", error);
      });
  }, []);

  return (
    <Paper>
      {photoUrl && (
        <Box component="div">
          <Typography component="h2" sx={{p:3}}>Congrats! You did it. Here's a random puppy for your hard work.</Typography>
          <Card sx={{
            // w: 30, 
            borderRadius: 4,
            }}>
            <CardMedia component="img" src={photoUrl} alt="Puppy" />
          </Card>
        </Box>
      )}
    </Paper>
  );
};

export default PuppyPhoto;