<template>
  <div>
    <q-modal content-css="padding: 50px" v-model="opened">
      <div class="container">
        <p class="q-title">Dados do Cliente</p>
        <!-- <ul v-for="c in this.userclients"  v-if="!( userclients == null)">
          <li><strong>Nome do cliente: </strong> {{ c.name }}</li>
          <li><strong>link para CODEWatch: </strong>{{ c.watchlink }}</li>
          <li>
            <q-btn label="delete" ></q-btn>
          </li>
        </ul> -->
        <ul>
          <li>
            <strong>Nome do cliente: </strong>
            <q-input id="inputname" v-model="userclient.name" :readonly="!editable" :hide-underline="!editable" />
          </li>
          <li>
            <strong>link para CODEWatch: </strong>
            <q-input id="inputwatchlink" v-model="userclient.watchlink" rows="70" :readonly="!editable" :hide-underline="!editable" />
          </li>
        </ul>
      </div>
      
      <q-btn
        color="primary"
        @click="updateClient()"
        icon="update"
        label="update"
        
      />

      <q-btn
        color="info"
        @click="editable = !editable"
        icon="edit"
        :label="editable == true ? 'editing..' : 'edit' "
        
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
      color="warning"   
      label="OPTIONS"  
      icon="update"

    >
      
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'UpdateUserClientModel',
  props: ['userclient'],
  data () {
    return {
      opened: false,
      editable: false,
      name: this.userclient.name
    }
  },
  computed: {
    // name () {
    //   const inputname = document.querySelectorAll('#inputname')[1]
    //   return inputname.value
    // },
    watchlink () {
      const inputwatchlink = document.querySelectorAll('#inputwatchlink')[1]
      return inputwatchlink.value
    }
  },
  methods: {
    closeModal() {
      this.opened = true
    },
    updateClient() {
      const data = {
        'id': this.userclient.id,
        'name': this.userclient.name,
        'watchlink': this.watchlink
      }
      console.log(data)
      this.$store.dispatch('clients/UPDATE_CLIENT', data).then(resp => {
        alert('dados atualizados com sucesso!', resp.data)
        // consulto novamente na API os clientes
        this.$store.dispatch('auth/GET_CLIENTES').then(resp => {})
      }).catch(err => {
        alert('falha ao atualizar os dados do cliente', err.data)
        // consulto novamente na API os clientes
        this.$store.dispatch('auth/GET_CLIENTES').then(resp => {})
      })
    }
  },
}
</script>

<style>
ul {
  list-style: none;
}
</style>
