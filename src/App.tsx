// import React from 'react';
import { Row, Banner, Nav } from 'template'
import { requests } from 'api/request'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.feacthTopRated}
        isLargeRow={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.feacthActionMovies}
        isLargeRow={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.feacthComedyMovies}
        isLargeRow={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.feacthHorrorMovies}
        isLargeRow={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.feacthRomanceMovies}
        isLargeRow={false}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.feacthDocumentMovies}
        isLargeRow={false}
      />
    </div>
  )
}

export default App
