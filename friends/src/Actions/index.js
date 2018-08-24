import axios from 'axios';


const PENDINGFRIENDS = 'PENDINGFRIENDS';
const SUCCESSFRIENDS = 'SUCCESSFRIENDS';
const ERRORFRIENDS = 'ERRORFRIENDS';


export const friendsfetching = () => {
    const promise = axios.get('http://localhost5000');
    return dispatch => {
        dispatch({type: PENDINGFRIENDS});
        promise.then(response => {
            console.log(response)
            dispatch({type: SUCCESSFRIENDS, payload: []})
        })
        .catch(err => {
            dispatch({type: ERRORFRIENDS, payload: "Failed to fetch friends"})
        })
    };
};

export const friendsSaving = () => {

}

export const friendsDeleting = () => {

}

export const friendsUpdating = () => {

}