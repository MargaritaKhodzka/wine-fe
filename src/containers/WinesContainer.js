import React from 'react';
// connect() function connects a React component to a Redux store
// it provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store
import { connect } from 'react-redux';
import { fetchWines } from '../actions/wineActions';
import Wines from '../components/Wines';

class WinesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchWines()
    }

    render() {
        return (
            <div>
                <Wines wines={this.props.wines} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wines: state.wines
    }
}

export default connect(mapStateToProps, {fetchWines})(WinesContainer);
