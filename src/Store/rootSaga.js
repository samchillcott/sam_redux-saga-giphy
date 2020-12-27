import { fork, all} from 'redux-saga/effects';
import watchSearch from '../Components/redux/SearchSaga';

export function* RootSaga() {
    yield all([
        fork(watchSearch)
    ])
}