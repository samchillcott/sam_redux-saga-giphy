import types from '../Search/types';
import { takeLatest, put, call } from 'redux-saga/effects';

function* setSearch() {

}

function* watchSearch() {
    yield takeLatest(types.watchGetSearchResults)
}
