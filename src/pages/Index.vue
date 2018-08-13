<template>
  <q-page class="flex flex-center">
    <div class="loginForm text-center">
      
      <div class="deep-orange-1">
        <img 
          src="https://www.codemed.com.br/site/wp-content/themes/codemed/assets/images/logo2018.png" 
          alt=""
          >
      </div>
      <br>
      <q-field class="text-left"
        icon="perm_identity"
        label=""
      >
      <q-input float-label="Usuário" v-model="username" type="email"/>
      </q-field>

      <q-field
        class="text-left"
        icon="vpn_key"
      >
        <q-input float-label="Senha" v-model="password" type="password"/>
      </q-field>
      <br>
      <div >
        <div
          class="loading"
          :style="{opacity: loadingOpacity()}"
          style="position:relative;">
          <q-spinner-puff  
            color="teal-4"
            size="95"
          />
        </div>

        <div style="position:relative; margin-top: -69px">
        <q-btn
          @click="onClickLogin"
          round
          label="Entrar"
          :icon="this.iconLogin"
          
          v-bind:class="this.btnClass"
        />
        <br>
        <p 
          :style="{opacity: this.loadingOpacity()}"
          class="text-weight-thin loading"
        >Loading...</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
@keyframes pulse {
  50% {
    opacity: 0;
  }
}

.loading{
  -webkit-transition: width 2s; /* Safari */
  transition: ease-in-out 1s;
  
}

p.loading {
  animation: pulse 2s ease-in-out infinite;
 
}
.loginForm {
  padding: 5em;
  background-color: rgba(255, 255, 255, 1);
}
</style>

<script>

export default {
  name: 'PageIndex',
  data (){
    return {
      username: '',
      password: '',
      isLoginClicked: false,
      btnClass : 'bg-grey-5',
      iconLogin: 'check'
    }
  },
  methods: {
    onClickLogin () {
      this.onClickLoginAnimate()
      const data = {
        username : this.username,
        passwd : this.password
      }
      this.$store.dispatch('auth/AUTH_REQUEST', data).then((resp)=>{
        setTimeout(()=>{
          this.onClickLoginAnimate()
          this.$router.push('/cliente')
          },
        1000)
        
      }).catch((err) => {
        this.onClickLoginAnimate()
        this.btnClass='bg-red'
        this.iconLogin='lock'
      })
    },
    onClickLoginAnimate () {
      this.isLoginClicked=!this.isLoginClicked

      if (this.isLoginClicked) { 
        this.btnClass='bg-secondary'
      } else {
        this.btnClass='bg-grey-5'
      }
    },
    loadingOpacity () {
      if (!this.isLoginClicked) {
        return 0
      }
      return 100
    }
  },
  watch: {
    isLoginClicked () {
      console.log(this.isLoginClicked)
      return this.isLoginClicked
    }
  }
}
</script>
