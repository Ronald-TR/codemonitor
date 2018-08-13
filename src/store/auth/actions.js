import Axios from "axios";

const baseUrl = 'http://localhost:5000/'
/*
export function someAction (context) {
}
*/

export function GET_CLIENTES ({commit, dispatch}) {
    return new Promise((resolve, reject) => {
        Axios({url: baseUrl + 'clients', headers: {'Authorization': localStorage.getItem('user-token')},method: 'GET'}).then( resp => {
            commit('GET_CLIENTES', resp.data)    
            resolve(resp)
        })
    }).catch(err => {
        reject(err)
    })
}

export function AUTH_REQUEST ({commit, dispatch}, user) {
    return new Promise((resolve, reject) => {
        
        commit('AUTH_REQUEST')
        Axios({url: baseUrl + 'auth', data: JSON.stringify(user), headers: {'Content-Type': 'application/json'}, method: 'POST'})
            .then( resp => {        
            console.log(JSON.stringify(user))
            localStorage.setItem('user-token', resp.data.token)
            // Axios.defaults.headers.common['Authorization'] = resp.token
            dispatch('GET_USER_INFO')
            commit('AUTH_SUCCESS', resp.data)

            resolve(resp)
        })
        .catch(err => {
            commit('AUTH_ERROR', err)
            commit('DELETE_USER_INFO')
            localStorage.removeItem('user-token')
            console.log('deu merda, removendo token')
            reject(err)

        })   
    })
}

export function GET_USER_INFO ({commit, dispatch}) {
    return new Promise((resolve, reject)=>{
        Axios({url: baseUrl+'users', headers: {'Authorization': localStorage.getItem('user-token')}, method: 'GET'})
        .then(resp => {
            console.log(resp)
            commit('SET_USER_INFO', resp.data)
            resolve(resp)
            }).catch(err => {
                commit('DELETE_USER_INFO')
                reject(err)
            })
        
    })
}

export function AUTH_LOGOUT ({commit, dispatch})  {
    return new Promise((resolve, reject) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token')
        resolve()
    })
}

export function teste () {
    console.log('testando action')
}

