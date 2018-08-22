<template>
  <q-page padding class="text-center">
    <div class="form-container bg-grey-1">
      <div class="form-bar bg-dark text-white">
        <div style="display: inline">
          <a class="text-weight-thin text-weight-light">Clientes </a>
          <NewUserClientModal style="display: inline" />
        </div>  
        <!-- <p class="text-weight-light">
        </p> -->
      </div>
      <div class="form-text" style="box-sizing: border-box">

      <p class="">
        Clique com o botão direito (ou segure, se em mobile) para exibir as opções do cliente
      </p>
      </div>

      <q-tabs class="form-text">
        <q-tab 
          v-for="(c, index) in this.clientes" 
          :label="c.name" 
          :name="String(c.id)" 
          slot="title"
          @click="currentClient = clientes[index]; services = null"
           />
        
        <q-tab-pane v-if="currentClient != null" :name="String(currentClient.id)">
          <q-btn
            @click="getServices(currentClient.watchlink+'watch/all')"
            :label="'load \'' + currentClient.name + '\' services'"
            :loading="isAjaxClicked"        
            :color="btnClientColor"
          />
          
          <UpdateUserClientModal :userclient="currentClient" />

          <q-list class="bg-grey-2 text-center" v-for="s in services">
            <q-list-header> {{s.display_name}}</q-list-header>
                        
              <q-item class="text-center">
                <q-item-side 
                  :right="false"
                  :icon="s.status === 'Running' ? 'check_circle_outline' : 'remove_circle_outline'" 
                  :color="s.status === 'Running' ? 'green' : 'red'">
                </q-item-side>
                
                <br>
                <q-item-main> 
                  <!-- botao de start -->
                <q-btn
                @click="acService('watch/startservice/' + s.name)"
                label="Start"
                icon="donut_large"
                color="white"
                class="text-black"
                :disable="isAjaxClicked || s.status === 'Running' ? true : false"             
              />
              <!-- botao de stop -->
              <q-btn
                @click="acService('watch/stopservice/' + s.name)"
                label="Stop"
                icon="block"
                color="black"
                :disable="isAjaxClicked || s.status === 'Stopped' ? true : false"
              />
              </q-item-main> 
              </q-item>      
          </q-list>
        </q-tab-pane>
      </q-tabs>
    </div>   
  </q-page>
</template>

<script>
import UpdateUserClientModal from 'components/UpdateUserClientModal'
import NewUserClientModal from 'components/NewUserClientModal'

export default {
  name: 'Clients',
  components: {
    UpdateUserClientModal, NewUserClientModal
  },
  data () {
    return { 
      currentClient: null,
      services: [],
      isAjaxClicked: false,
      btnClientColor: 'deep-orange-4'
     
    }
  },
  methods: {
    acService(endpoint) {
      this.startLoadingAnimations()
      this.$axios.get(this.currentClient.watchlink + endpoint).then(resp => {  
        if (resp.data.status !== 'OK') {
          alert(resp.data.output)
        }
        this.getServices(this.currentClient.watchlink+'watch/all')
      }).catch(err => {
        alert('Não foi possivel se comunicar a API ' + err)
        this.isAjaxClicked = false
        this.stopLoadingAnimations()
      })
    },

    getServices(watchlink) {
      
      this.startLoadingAnimations()

      this.$axios.get(watchlink).then(resp => {
        this.services=resp.data
        this.stopLoadingAnimations('success')
      }).catch( err => {
        this.stopLoadingAnimations('error')
      })
    },
    loadingOpacity () {
      if (!this.isAjaxClicked) {
        return 0
      }
      return 100
    },
    startLoadingAnimations() {
      this.isAjaxClicked = true
      this.btnClientColor= 'tertiary'
    },
    stopLoadingAnimations(atype) {
      this.isAjaxClicked = false
      if (atype === 'success') {
        this.btnClientColor= 'secondary'
      } else {
        this.btnClientColor= 'red'
      }
    }
  },
  computed: {
    clientes () {
      return this.$store.state.auth.clientes
    }
  },
  mounted () {
    this.$store.dispatch('auth/GET_CLIENTES').then(resp => { })
  }
}
</script>

<style>
.loading{
  -webkit-transition: width 2s; /* Safari */
  transition: ease-in-out 1s;
  
}
.form-container {
  border-radius: 5px; 
  /* display: flex; */
  /* flex-wrap: wrap;
  flex-direction: row; */

}

.form-container > :not(.form-bar){
  padding-left: 20px;
  padding-right: 20px;

  box-sizing: border-box;
}

.form-bar{
  /* box-sizing: border-box; */
  border-top-left-radius: inherit;
  border-top-right-radius: inherit; 
  font-size: 1.5em;

}

.form-text {
  text-align: center;
}

</style>
