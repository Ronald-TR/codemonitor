<template>
  <q-page padding>
    <div class="container">
      <p class="q-title">Dados do Usuário</p>
      <ul class="">
        <li><strong>Nome de exibição:</strong> {{ this.userinfo.display_name }}</li>
        <li><strong>Usuario: </strong>{{ this.userinfo.username }}</li>
        <li><strong>Data de Cadastro: </strong> {{ this.userinfo.join_date }} </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userinfo: null
    }
  },
  mounted () {
    this.userinfo = this.$store.state.auth.userinfo
  }
}
</script>

<style>
.container {
  /* display: flex; */
  background-color: white;
  border-radius: 5px;
  padding: 20px;
}

ul {
  /* list-style: none; */
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
