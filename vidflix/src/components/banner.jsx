import React , {useEffect, useState} from "react";
import CATEGORIES from "../assets/api/constants";
import requestMaker from "../assets/api/requests";
import { BASE_IMAGE_URL } from "../assets/api/constants";
import "../assets/css/banner.css"


export default function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(()=>{

        async function fetchData(){
            const request = await requestMaker.get(CATEGORIES.NetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData();

    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header id="header"
        style ={{
            backgroundSize: "cover",
            backgroundImage: `url(${BASE_IMAGE_URL}/${movie?.backdrop_path})`,
            backgroundPosition: "center center"

        }}
        >
            <div className="banner">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                        <button className="banner-button">Play</button>
                        <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-desc">
                    {truncate(movie?.overview, 150)}
                </h1>
            
            </div>

            <div className="banner-fade"></div>
        </header>    
    )
}