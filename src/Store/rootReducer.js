import { combineReducers } from 'redux';
import { SearchReducer } from '../Components/redux/SearchReducer';

export default combineReducers({
    search: SearchReducer
})
