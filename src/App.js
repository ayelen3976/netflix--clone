import React from 'react';
import './App.css';
import Row from'./components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav'
function App() {


  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <Row
      title='NETFLIX ORIGINALS' 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
    />
     <Row title='Trending now' fetchUrl={requests.fecthTrending} />
     <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
     <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
     <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies} />
     <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
     <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;