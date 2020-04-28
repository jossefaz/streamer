import types from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    uid: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.SIGN_IN:
            return { ...state, isSignedIn: true, uid: action.payload }

        case types.SIGN_OUT:
            return { ...state, isSignedIn: false }

        default:
            return state;
    }

}