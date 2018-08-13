import store from '../store/auth'

const ifNotAuthenticated = (to, from, next) => {

  const isAuth = !(store.state.userinfo === null)
  if (isAuth === true) {
    console.log(store.state.userinfo)
    console.log('entrando na rota de cliente')
    next()
    return
  }
  console.log(store.state.userinfo)
  next('*')
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cliente', component: () => import('pages/Clients.vue'), beforeEnter: ifNotAuthenticated },
      { path: '/cadastro', component: () => import('pages/Cadaster.vue'), beforeEnter: ifNotAuthenticated }
    ]
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
