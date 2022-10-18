import React, { useState } from "react";

//Mui components
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

//Ícones
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

//Custom components
import MovieCard from "@/components/MovieCard";
import SnackbarAlert from "@/components/SnackbarAlert";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesNameSearch, setMovieNameSearch] = useState("");
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  async function searchMoviesByName(movieName) {
    const response = await fetch(`/api/search/?t=${movieName}`);
    const responseData = await response.json();
    setMoviesList(responseData);
  }

  return (
    <Box
      sx={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          <TextField
            id="outlined-basic"
            label="Procure seu filme"
            variant="outlined"
            size="small"
            autoComplete="off"
            onChange={(e) => {
              setMovieNameSearch(e.target.value);
            }}
          />
          <Button
            variant="contained"
            disableElevation
            endIcon={<ManageSearchIcon />}
            onClick={() => {
              searchMoviesByName(moviesNameSearch);
            }}
          >
            Buscar
          </Button>
        </Stack>
      </Box>
      <Grid container spacing={1} sx={{ width: "100%" }}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
          <MovieCard />
        </Grid>
      </Grid>
      <SnackbarAlert typeSnackbar="error" textSnackbar="Erro" />
    </Box>
  );
}
