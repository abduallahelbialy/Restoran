

<template>
<Bntnav/>
  <RouterView />
<Footer/>
</template>
<script>
import { RouterView } from 'vue-router';
import Bntnav from './views/Bntnav.vue';
import Footer from './views/Footer.vue';
export default {
name:"Btnnav",
components:{RouterView,Bntnav,Footer}
}
</script>
<style >

</style>
