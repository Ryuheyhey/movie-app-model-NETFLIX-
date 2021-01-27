import { useEffect, useState } from 'react'
import axios from 'api/axios'
import { requests } from 'api/request'
import '../styles/Banner.scss'

type moveProps = {
  title?: string
  name?: string
  original_name?: string
  backdrop_path?: string
  overview?: string
}

const Banner = () => {
  const baseUrl: string = 'https://image.tmdb.org/t/p/original'
  const [movie, setMovie] = useState<moveProps>({})

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.feachNetflixOriginals)

      // リクエストの結果の[ランダム]番目をmovieにセットする
      setMovie(
        request.data.results[
          // ランダムな数字を生成
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      )
      return request
    }
    fetchData()
  }, [])

  console.log(movie)

  // descriptionの切り捨て関数
  function truncate(str: any, n: number) {
    if (str !== undefined) {
      // strがnよりも長かったら、文の最初からn文字目までを切り出す
      return str.length > n ? str?.substr(0, n - 1) + '...' : str
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path}) `,
        backgroundPosition: 'center center',
      }}
    >
      <div className="Banner-contents">
        <h1 className="Banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  )
}

export default Banner
