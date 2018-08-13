export const GET_CLIENTES = (state, clientes) => {
    state.clientes = clientes
}

export const AUTH_REQUEST = (state) => {
    state.status = 'loading'
}

export const AUTH_SUCCESS = (state, resp) => {
    state.status = 'success'
    state.token = resp.token
}

export const AUTH_ERROR = (state) => {
    state.status = 'error'
    state.token = null
    state.hasLoadedOnce = true
}

export const AUTH_LOGOUT = (state) => {
    state.token = ''
}

export const SET_USER_INFO = (state, resp) => {
    state.userinfo = ''
    state.userinfo = resp
}

export const DELETE_USER_INFO = (state, resp) => {
    state.userinfo = null
}