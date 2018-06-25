import React, {Component} from 'react';
import FilmList from '../components/FilmList';
import Button from '../components/Button'

class OpeningMovies extends Component {

    render() {
        return(
            <div className='openings'>
            <p>UK Opening This Week</p>
            <FilmList films={movies} />
            <hr />
            <Button />
            </div>

        )
    }
}

const movies = [
    {id: 1, title: 'Saugage Party'},
    {id: 2, title: 'Café Society'},
    {id: 3, title: 'Morgan'},
    {id: 4, title: 'The 9nth Life of Loius Drax'},
    {id: 5, title: 'Naam Hai Akira'},
    {id: 6, title: 'Equity'},
    {id: 7, title: 'Things to Come'},
]

export default OpeningMovies;