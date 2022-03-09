import React from 'react';
import { Routes, Route } from 'react-router-dom';
// connect() function connects a React component to a Redux store
// it provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store
import { connect } from 'react-redux';
import { fetchWines } from '../actions/wineActions';
import Wines from '../components/Wines';
import Wine from '../components/Wine';
import WineInput from '../components/WineInput';

class WinesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchWines()
    }

    render() {
        return (
            <Routes>
                <Route path='new' element={<WineInput />} />
                <Route path='/' element={<Wines wines={this.props.wines} />} />
                <Route path=':id' element={<Wine wines={this.props.wines} />} />
            </Routes>
        );
    }
}

const mapStateToProps = state => {
    return {
        wines: state.wines
    }
}

export default connect(mapStateToProps, {fetchWines})(WinesContainer);
