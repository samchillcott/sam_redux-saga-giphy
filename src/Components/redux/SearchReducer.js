import { Map, fromJS } from 'immutable';
import { types } from '../Search/types';

const initialState = Map({
    searchResults: []
})

export const SearchReducer = (state = initialState, action) => {
    switch(action.type){
        case types.setSearchResults: {
            console.log({action});
            return state.merge({
                searchResults: fromJS(action.results)
            });
        }
        default: {
            return state;
        }
    }
}


