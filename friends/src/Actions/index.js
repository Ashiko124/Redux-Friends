import axios from 'axios';


 export const PENDINGFRIENDS = 'PENDINGFRIENDS';
 export const SUCCESSFRIENDS = 'SUCCESSFRIENDS';
 export const ERRORFRIENDS = 'ERRORFRIENDS';


export const friendsfetching = () => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({type: PENDINGFRIENDS});
        promise.then(response => {
            dispatch({type: SUCCESSFRIENDS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERRORFRIENDS, payload: "Failed to fetch friends"})
        })
    };
};

export const friendsSaving = (data) => {
    console.log(` this is are data, ${data.friends}`);
    const promise = axios.post('http://localhost:5000/api/friends',  data);
    return dispatch => {
        dispatch({type: PENDINGFRIENDS});
        promise.then(response => {
            dispatch({type: SUCCESSFRIENDS, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERRORFRIENDS, payload: "Failed to add friend"})
        })
    };
};



// export const friendsDeleting = () => {

// }

// export const friendsUpdating = () => {

// }