/*
export function someGetter (state) {
}
*/

export function isAuthenticated (state) { !(state.token === null) }
export function authStatus (state) {state.status}
