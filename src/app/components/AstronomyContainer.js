import React, { Component } from 'react';
import axios from 'axios';
import AstronomyCard from './AstronomyCard';


class AstronomyContainer extends Component {
    constructor () {
        super();
        this.state = {
            astronomy: []
        }
    }

    componentDidMount() {
        const NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
        const API_KEY = 'uW5oPgEqbCqQzts7H016GxKRnEo8bZuQrdfSRPPU';

        axios.get(NASA_URL + API_KEY).then(resp => {
            console.log(resp)
            this.setState({
                astronomy:resp.data
            })
        }).catch(err => {
            console.log('errored: ', err)
        });
    }

    render () {
        const { astronomy } = this.state;
        return (
            <AstronomyCard data={astronomy} />
        )
    }
}

export default AstronomyContainer;