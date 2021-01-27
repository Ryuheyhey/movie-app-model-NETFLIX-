import axios from 'api/axios'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import '../styles/Row.scss'

type Props = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
}

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

type Options = {
  height: string
  width: string
  playerVars: {
    autoplay: 0 | 1 | undefined
  }
}

const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  // ふつうReactだとuseState([])のところに型を追加しただけ
  const [movies, setMovies] = useState<Movie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>('')

  const baseUrl: string = 'https://image.tmdb.org/t/p/original'

  // fetchUrlが更新されるたび、データを取得＆moviesにセット
  useEffect(() => {
    async function fetchData() {
      // このaxiosのbaseUrlは、TMDBのものになっている
      const request = await axios.get(fetchUrl)
      //  APIを叩いて取得してきたデータの結果をmoviesにセットする
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=821c4867abb2b9f037a72df1a03ca96f`,
      )
      setTrailerUrl(trailerurl.data.results[0]?.key)
    }
    console.log(trailerUrl)
  }
  return (
    <div className="Row">
      <h2 className="Row-title">{title}</h2>
      <div className="Row-posters">
        {movies.length > 0 &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className={` Row-poster ${isLargeRow && 'Row-poster-large'}`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }
               `}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
