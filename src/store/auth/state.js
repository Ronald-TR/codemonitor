
export default {
  token: localStorage.getItem('user-token') || null,
  status: '',
  hasLoadedOnce: false,
  clientes: []
}
