<template>
  <div>
    <q-modal content-css="padding: 50px" v-model="opened">
      <div class="container">
        <p class="q-title">Dados do Usuário</p>
        <ul class="">
          <li><strong>Nome de exibição:</strong> {{ this.userinfo.display_name }}</li>
          <li><strong>Usuario: </strong>{{ this.userinfo.username }}</li>
          <li><strong>Data de Cadastro: </strong> {{ this.userinfo.join_date }} </li>
        </ul>
      </div>


      <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
    </q-modal>
    <q-chip 
      flat
      class="cursor-pointer" 
      @click.native="opened = true"
      avatar="/statics/avatar.jpg" 
      color="primary"           
    >
      {{ this.userinfo.display_name }}
    </q-chip>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      userinfo: null,
      opened: false
    }
  },
  methods: {

  },
  mounted () {
    this.userinfo = this.$store.state.auth.userinfo
  }
}
</script>

<style>
</style>
