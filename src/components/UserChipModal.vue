<template>
  <div>
    <q-modal content-css="padding: 50px" v-model="opened">
      <div class="container">
        <p class="q-title">Dados do Usuário</p>
        <ul v-if="!(this.userinfo == null)">
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
      {{ this.getUserChipName() }}
    </q-chip>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      opened: false
    }
  },
  methods: {
    getUserChipName () {
      return !(this.userinfo == null) ? this.userinfo.display_name : 'Not Logged' 
    }
  },
  computed: {
    userinfo () {
      return this.$store.state.auth.userinfo
    }
  },
  mounted () {
    console.log('a', this.userinfo)
  }
}
</script>

<style>
</style>
