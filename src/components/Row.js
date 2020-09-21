import axios from '../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from "movie-trailer"
const base_url='https://image.tmdb.org/t/p/original/'

function Row({title, fetchUrl, isLargeRow}){
  const [movies, setMovies]=useState([]);
  const[ trailerUrl, setTrailerUrl]=useState('');

    // a snippet of code wich runs based on a specific condition 
    useEffect(()=>{
    //if [], run once when he row loads, and don't run again
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
   }
   fetchData();
    }, [fetchUrl]);
 console.table(movies);

    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1, 
        }
    }


    const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl('')
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              // https://www.youtube.com/watch?v=g59rUQbVlIw
              // we need this id, g59rUQbVlIw
    
              const urlParams = new URLSearchParams(new URL(url).search) // ?v=g59rUQbVlIw
              setTrailerUrl(urlParams.get('v'))  // g59rUQbVlIw
            })
            .catch((error) => console.log(error))
        }
      }
    
    


return (
<div className='row'>
   <h2 className='row_title'>{title}</h2>
   <div className='row_posters'>

    {movies.map(movie=>(
        <img 
        className={`row_poster ${isLargeRow && 'row_posterlarge' }`}
        key={movie.id}
        onClick={() => handleClick(movie)}
        src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
        alt={movie.title}/>
    ))}
    </div>
    {trailerUrl && <Youtube videoId={trailerUrl}f opts={opts} /> 
      }
 </div>
    )
}
export default Row;