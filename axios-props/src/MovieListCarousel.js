import React, {useState, useEffect} from 'react';
import axios from 'axios'; //부모
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const MovieLists = () => {
    const [movies, setMovies] = useState([]);

    //외부에서 API를 통해 영화 데이터를 가져오고 내가 원하는 내용만 보여주고싶다 => then에 요청.
    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(response => {
            //가져온 데이터 중 필요한 정보만 가져와서 업데이트
            const movieData = response.data.data.movies.map(movie => ({
                id : movie.id, 
                title : movie.title,
                rating : movie.rating,
                poster : movie.medium_cover_image,
            }));
            setMovies(movieData);
        })
        .catch(error => {
            console.log('데이터 없음', error);
        });
    }, []);

    return(
        <div>
            <Carousel>
                {movies.map(movie => (
                    <Carousel.Item key={movie.id}>
                    <MovieCard movie={movie}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default MovieLists;