import { LOADING } from '../constants/index';
/**
 * state =[] default state is empty array
 * actions should contain type is required
*/
export default Search = (state = [], actions) => {
    switch (actions.type) {
        case LOADING:
            return Object.assign({}, state, {})
        default:
            return state;
    }
}