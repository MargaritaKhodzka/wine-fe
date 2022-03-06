// reducer accepts 2 parameters: the current state and an action object
// function must update the state and return the new state
export default function wineReducer(state = {wines: []}, action) {
    switch (action.type) {
        case 'FETCH_WINES':
            return {
                wines: action.payload
            }

        default:
            return state;
    }
}