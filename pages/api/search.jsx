import headers from "./headers";

async function searchMoviesList(req, res) {
  /*
    DOCS API:  http://www.omdbapi.com/    
    */
  console.log("Entrou no search");
  var movieName = req.query.movieName ?? "";

  const url = `${process.env.URL_BASE}/?t=${movieName}&apikey=${process.env.API_KEY}`;

  console.log(url);

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const json = await response.json();
  res.status(200).json(json);
  console.log(response);
  console.log(json);
}

export default async function handler(req, res) {
  if (req.method == "GET") {
    searchMoviesList(req, res);
  } else {
    res.status(405).send();
  }
}
