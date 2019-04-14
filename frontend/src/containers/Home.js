import React, { Component } from 'react';
import { Input } from '../components';
import db from '../services/db';

export default (class Home extends Component {
    state = {
        search: '',
        movieList: [],
    }

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleValidation();
        }
    };

    handleValidation = () => {
        // const All = this.state.search.trim().toLowerCase()
   
    };
    componentDidMount()  {
        db.allMovies()
        .then(({data}) => {
            console.log('All Movies', data);
            this.setState({
                movieList: data,
            });
        })
        .catch(err => {
            console.log('Could not err', err);
        })
    }

    render() {
        return (
            <Input label='Search' name='search' handleChange={this.handleChange} onKeyPress={this.onKeyPress} placeholder={'Enter Movie Name'} />
        )
    };

});