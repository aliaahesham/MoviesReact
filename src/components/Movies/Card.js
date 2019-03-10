import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { Title, Year, imdbID, Type, Poster } = this.props;
        return (
            <div className="movie">
                <img alt ="Movie Poster" src={Poster === "N/A" ? "https://app.reklist.com/assets/img/avatars/movie-poster-001.png" : Poster} height="400"></img>
                <div><b>Title: </b>{Title} </div>
                <div><b>Year: </b>{Year} </div>
                <div><b>imdbID: </b>{imdbID} </div>
                <div><b>Type: </b> {Type} </div>
            </div>
        );
    }
}

export default MovieCard;