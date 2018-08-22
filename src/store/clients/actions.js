import Axios from 'axios'
import store from '../../store'
/*
export function someAction (context) {
}
*/
const base_url = 'http://apicodemonitor.herokuapp.com/'
export function GET_ALL_SERVICES ({commit, dispatch}, user) {
    return new Promise((resolve, reject) => {
        Axios.get(base_url + 'all')
    })
}

export function NEW_CLIENT( {commit, dispatch}, userclient ) {
    return new Promise( (resolve, reject ) => {
        const data = {
            'name': userclient.name,
            'watchlink': userclient.watchlink
        }
        const headers = {
            'Authorization': store().state.auth.token,
            'Content-Type': 'application/json'
        }
        Axios({url: base_url + 'clients', data: data, method: 'POST', headers: headers }).then(resp => {
            resolve(resp)    
        }).catch(err => {
            reject(err)
        })
    })
}

export function UPDATE_CLIENT( {commit, dispatch}, userclient ) {
    return new Promise( (resolve, reject ) => {
        const data = {
            'id': userclient.id,
            'name': userclient.name,
            'watchlink': userclient.watchlink 
        }
        const headers = {
            'Authorization': store().state.auth.token,
            'Content-Type': 'application/json'
        }
        
        Axios({url: base_url + 'clients', data: data, method: 'PATCH', headers: headers }).then(resp => {
            resolve(resp)    
        }).catch(err => {
            reject(err)
        })
    })
}

export function DELETE_CLIENT( {commit, dispatch}, userclient ) {
    return new Promise( (resolve, reject ) => {
        const data = {
            'id': userclient.id,
        }
        const headers = {
            'Authorization': store().state.auth.token,
            'Content-Type': 'application/json'
        }
        Axios({url: base_url + 'clients', data: data, method: 'DELETE', headers: headers }).then(resp => {
            resolve(resp)    
        }).catch(err => {
            reject(err)
        })
    })
}