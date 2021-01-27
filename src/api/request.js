const API_KEY = "821c4867abb2b9f037a72df1a03ca96f"

// APIキーで取得できるデータ
export const requests = {
  feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feacthTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feacthActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feacthComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feacthHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feacthRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feacthDocumentMovies:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
