export const fetchWines = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/wines')
        .then(response => response.json())
        .then(wines => dispatch({
            type: 'FETCH_WINES',
            payload: wines
        }))
    };
};

export const addWine = (data, history, path) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/wines', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(wine => {
            history.push(path)
            dispatch({
                type: 'ADD_WINE',
                payload: wine
            })
        })
    };
};

export const deleteWine = wineId => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/wines/${wineId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(wine => dispatch({
            type: 'DELETE_WINE',
            payload: wine.id
        }))
    };
};
