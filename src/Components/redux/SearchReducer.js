import { Map, fromJS } from 'immutable';
import { types } from '../Search/types';

const initialState = Map({
    searchResults: []
})

export const SearchReducer = (state = initialState, action) => {
    switch(action.type){
        case types.addSearchResults: {
            return state.merge({
                searchResults: action.results
            });
        }
        default: {
            return state;
        }
    }
}


