import { FETCH_COIN_START, FETCH_COIN_SUCCESS } from '../actions/action'

export const initialState = {
isFetching: false,
data: [],
error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COIN_START:
            return {
                ...state,
                isFetching: true
            }
            case FETCH_COIN_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    data: action.payload
                }
            default:
                return state;
    }
}