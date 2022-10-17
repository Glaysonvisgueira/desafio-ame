import headers from "./headers";

async function searchMoviesList(req, res) {
  /*
    DOCS API:  http://www.omdbapi.com/    
    */

  const movieName = req.query.movieName ?? "";

  const url = ` http://omdbapi.com/?s=${movieName}`;

  const result = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: headers,
  // }).then((response) => response.json());

  const json = await result.json();

  res.status(200).json(json);
}

export default async function handler(req, res) {
  if (req.method == "GET") {
    getMoviesList(req, res);
  } else {
    res.status(405).send();
  }
}
