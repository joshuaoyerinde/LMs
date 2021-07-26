<template>
  <div> 
    <Header/>
    <Catego/>
    <Footer></Footer>

  </div>
</template>

<script>
  // import Nav from '../components/Nav.vue'
  import Header from '../components/header/Header.vue'
  // import Navbar from '../components/navbar/Navbar.vue'
  import Catego from '../components/content-body/Category.vue'
  import Footer from '../components/footer/Footer.vue'
  // import Login from '../views/login/Login.vue'
  
  export default {
    name: 'Home',
    data:()=>({
       
    }),
    components:{
      // Navbar,
      Header,
      Catego,
      Footer,
      // Login 
    }
  }
</script>
<style scoped lang="css">
  
</style>