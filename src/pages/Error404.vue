<template>
  <div class="fixed-center text-center bg-gray-1">
    <p>
      <!-- <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      > -->
      <img 
      src="https://78.media.tumblr.com/aa5f67ad56b6375501b607e740143a67/tumblr_n0dca4EmeH1qjfj9zo1_r1_400.gif" 
      alt="ricky and morty 404">
    </p>
    
    <p class="text-faded"><strong>Erro (404)</strong><br>Está viajando por lugares desconhecidos?</p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Voltar</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
