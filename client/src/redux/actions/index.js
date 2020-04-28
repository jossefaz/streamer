import types from './types'

export const signIn = (uid) => {
    return {
        type: types.SIGN_IN,
        payload: uid
    }
}

export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}