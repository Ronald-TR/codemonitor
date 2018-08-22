<template>
  <div>
    <q-modal content-css="padding: 50px" v-model="opened">
      <p class="q-title">Novo Cliente!</p>
        <ul>
          <li>
            <q-input float-label="Nome do cliente" v-model="userclient.name" />
          </li>
          <li>
            <q-input float-label="link para CODEWatch" v-model="userclient.watchlink"  />
          </li>
        </ul>

        <q-btn
        color="primary"
        @click="newClient()"
        icon="add"
        label="new"
        
      />
      <q-btn
        color="negative"
        @click="opened = false; editable = false"
        icon="close"
        label="close"
      />
    </q-modal>
     <q-btn 
      rounded 
      @click.native="closeModal"
      color="transparent"     
      icon="add"
      

    >
      
    </q-btn>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      opened: false,
      userclient: {
        name: null,
        watchlink: null
      }
    }
  },
  methods: {
    closeModal() {
      this.opened = true
    },
    newClient(){
      const data = {
        'name': this.userclient.name,
        'watchlink': this.userclient.watchlink
      }
      console.log(data)
      this.$store.dispatch('clients/NEW_CLIENT', data).then(resp => {
        alert('cliente criado com sucesso!', resp.data)
        // consulto novamente na API os clientes
        this.$store.dispatch('auth/GET_CLIENTES').then(resp => {})
      }).catch(err => {
        alert('falha ao criar cliente', err.data)
        // consulto novamente na API os clientes
        this.$store.dispatch('auth/GET_CLIENTES').then(resp => {})
      })
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
