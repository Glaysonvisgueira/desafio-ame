import headers from "./headers";

async function searchMoviesList(req, res) {
  /*
    DOCS API:  http://www.omdbapi.com/    
  */

  var movieName = req.query.t;

  const url = `${process.env.URL_BASE}/?t=${movieName}&apikey=${process.env.API_KEY}`;

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const json = await response.json();
  res.status(200).json(json);
}

export default async function handler(req, res) {
  if (req.method == "GET") {
    searchMoviesList(req, res);
  } else {
    res.status(405).send();
  }
}
