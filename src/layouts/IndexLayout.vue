<template>
  <q-layout id="bg" view="lHh Lpr lFf">
    <q-layout-header
      class="cm-navbar"
      :class="{'dontdisplay': scrollY}"      
    >
      <q-toolbar
        color="dark"
        :glossy="!$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
        v-ripple
          
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title shrink @click.native="$router.push('/')">
          CODEMED Services
          <div slot="subtitle"></div>
        </q-toolbar-title>
        
        <user-chip-modal></user-chip-modal>
         
 
      </q-toolbar>

    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      id="lista"
      
    >
      <q-list
        no-border
        link
        inset-delimiter   
        
      >
        <q-list-header v-ripple>
          <q-chip 
             
            color="primary"
          
          >

          Painel de Gerenciamento
          </q-chip>


        </q-list-header>
        <q-item @click.native="$router.push('/cadastro')">
          <q-item-side icon="school" />
          <q-item-main label="Cadastre" sublabel="Clientes e seus Serviços" />
        </q-item>
        <q-item @click.native="$router.push('/cliente')">
          <q-item-side icon="face" />
          <q-item-main label="Clientes" sublabel="Visualize-os e gerencie-os" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.cm-navbar{
  transition: ease-in-out 0.5s;
}
.dontdisplay {
  opacity: 0;
}

</style>


<script>
import { openURL } from 'quasar'
import UserChipModal from 'components/UserChipModal'

export default {
  name: 'indexLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      scrollY: 0,
      usuario: null
    }
  },
  methods: {
    openURL,
    getUserInfo() {
      const userinfo = this.$store.state.auth.userinfo
      return !(userinfo == null) ? userinfo : {display_name: 'Not logged'}
    }

  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY
    });
  },
  components: { UserChipModal }  
}
</script>

<style>
#bg {
  background-image: url('~assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#lista{
  background-blend-mode: color;
  background-color: rgba(red, green, 0, .5);
}
</style>
