import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addEntry = async (entry: IEntry) => {

    const action: EntryAction = {
        type: actionTypes.ADD_ENTRY,
        entry,
    }

    try {
        return postRequest(action);
    }
    catch (error) {
        return Promise.reject({error});
    }
}


export const getEntries = async () => {
    try {
        return getRequest();
    }
    catch (error) {
        return Promise.reject({error});
    }
}

export function postRequest(action: EntryAction) {
    return (dispatch: DispatchType) => {
        axios.post('http://localhost:1337/entries', dispatch(action));
    }
}

export function getRequest() {
    return (dispatch: DispatchType) => {
        axios.get('http://localhost:1337/entries');
    }
}