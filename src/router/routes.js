import store from '../store'


const ifNotAuthenticated = (to, from, next) => {

  const isAuth = !(store().state.auth.userinfo === null)
  if (isAuth === true) {
    next()
    return
  }
  next('*')
}

const onBeforeLogin = (to, from, next) => {
  // faço o pre loading das informações do usuario
  store().dispatch('auth/GET_USER_INFO').then(resp => { }).catch(err =>{  })
  
  next()  
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cliente', component: () => import('pages/Clients.vue'), beforeEnter: ifNotAuthenticated },
      { path: '/cadastro', component: () => import('pages/Cadaster.vue'), beforeEnter: ifNotAuthenticated },
      { path: '/usuario', component: () => import('pages/user.vue'), beforeEnter: ifNotAuthenticated },
    ],
    beforeEnter: onBeforeLogin
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
