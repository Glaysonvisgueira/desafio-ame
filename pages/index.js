import React, { useState, useEffect } from "react";

//Mui components
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

//Ícones
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {}, []);

  function searchMoviesByName() {
    console.log("Procurar filme.");
  }

  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <TextField
          id="outlined-basic"
          label="Procure seu filme"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          disableElevation
          endIcon={<ManageSearchIcon />}
        >
          Buscar
        </Button>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}
