import Axios from 'axios'
/*
export function someAction (context) {
}
*/
const base_url = 'http://'
export function GET_ALL_SERVICES ({commit, dispatch}, user) {
    return new Promise((resolve, reject) => {
        Axios.get(base_url + 'all')
    })
}