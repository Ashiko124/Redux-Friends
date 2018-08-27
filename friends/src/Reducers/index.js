
import {PENDINGFRIENDS, SUCCESSFRIENDS, ERRORFRIENDS} from '../Actions/index';


const initalState = {
    friendPending: false, 
    friendSaving: false,
    friendUpdating: false, 
    friendDeleteing: false, 
    friends: [{id: 99, age: 99, name: "The hero!", email: "Greeneselectronics@getMaxListeners"}],
    errorFriends: null
  }
  


export const friendsReducer = (state = initalState, action) => {
    switch(action.type) {
        case PENDINGFRIENDS: 
        return Object.assign({}, state, {friendsPending: true});
        case SUCCESSFRIENDS: 
        return Object.assign({}, state, { friends: [...action.payload], friendsPending: false})
        case ERRORFRIENDS:
        return Object.assing ({}, state, {friendsPending: false, error: 'Failed to get friends!'} )
        default: 
        return state
    }
}