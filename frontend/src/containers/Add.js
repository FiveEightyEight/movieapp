import React, { Component } from 'react';
import { Input } from '../components';
import call from '../services/calls';
import db from '../services/db';

export default (class Add extends Component {
    state = {
        search: '',
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
        const title = this.state.search.trim().toLowerCase()
        call(title)
            .then(({ data }) => {
                const {Title, Genre, Poster, Year} = data;
                return db.movie(Title, Genre, Poster, Year)
            })
            .then( ({data: {id: {id}}}) => {
                console.log(`${title} added to database, ID: `, id);
            })
            .catch(err => {
                console.log('error', err);
            })
    };
    render() {
        return (
            <Input name='search' handleChange={this.handleChange} onKeyPress={this.onKeyPress} placeholder={'Add Movie to Database'} />
        )
    };

});