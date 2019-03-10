import React from 'react';

import MovieCard from './Card'

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterData: this.props.data,
            input: '',
            checked: false,
        };
        //this.search = this.search.bind(this);
        this.filter = this.filter.bind(this);
    }
    filter(e) {
        debugger;
        let { checked, input } = this.state;

        if (e.target.type == 'checkbox') {
            checked = e.target.checked;
        } else {
            input = e.target.value;
        }

        const watched = this.props.data.filter(m => m.watched === checked && m.Title.toLowerCase().includes(input.toLowerCase())
        );

        this.setState({
            filterData: watched,
            checked: checked,
            input: input,
        });

    }
    render() {
        const { filterData } = this.state;
        return (
            <>
                <div className="white">
                    <input type="text" name="search" onChange={this.filter}></input>
                    <input type="checkbox" onChange={this.filter} />Watched movies
                </div>
                <div className="container"> {filterData.map(movie => <MovieCard{...movie} />)} </div>
            </>
        );
    }
}
export default MoviesList;