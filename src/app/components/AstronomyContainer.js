import React, { Component } from 'react';
import { connect } from 'react-redux';
import AstronomyCard from './AstronomyCard';
import fetchData from '../../actions/fetch_data';


class AstronomyContainer extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render () {
        return (
            <AstronomyCard data={astronomy} />
        )
    }
}

function mapStateToProps(state) {
    return {astronomy: state.astronomy}
}


// map state to props and map dispatch to props
export default connect(mapStateToProps, { fetchData })(AstronomyContainer);