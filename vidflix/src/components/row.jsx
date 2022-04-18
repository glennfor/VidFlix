import React , {useState, useEffect} from "react"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import requestMaker from "../assets/api/requests";
import { BASE_IMAGE_URL } from "../assets/api/constants";
import "../assets/css/row.css";


export default function Row({title, fetchURL,isLargeRow}){

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("")

    useEffect(()=>{

        async function fetchData(){
            const request = await requestMaker.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchURL])

    const opts = {
        height: "390",
        width: "100%",
        playerVars : {
            autoplay: 1,
        }
    }
    const handleClick = (movie) =>{
        if(trailerURL)setTrailerURL('')
        else{
            movieTrailer(`${movie.id}`).then(
                url=>{
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerURL(urlParams.get("v"))
                }
            ).catch((error)=>{
                console.log(error)
            }
            )
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img 
                        className = {`row-poster ${isLargeRow ? "row-poster-large":""}`}
                        key={movie.id} 
                        onClick = {()=>handleClick(movie)}
                        src= {`${BASE_IMAGE_URL}${ isLargeRow? movie.poster_path: movie.backdrop_path }`} 
                        alt={movie.name} 
                    /> 
                    )
                )}
            </div>
            { trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}