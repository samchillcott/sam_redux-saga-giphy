import { types } from '../Search/types';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { setSearchResults } from '../Search/action';

export function* setSearch({value}) {
    try{
        const api_key = "A3AbxmhldfvQlsrkuBCNzWP2PVmZhbMk";
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${value}?limit=20`;
        const data = yield axios.get(url);
        console.log(data.data.data);
        return yield put(setSearchResults(data.data.data));
    } catch(e) {
        console.log(e);
    }
}

export function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults, setSearch)
}
