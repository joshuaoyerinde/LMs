<template :style="style">
  <div id="app" :style="style">
  <v-app id="inspire" :style="style">
    <v-sheet fixed  :style="style">
    <v-app-bar color="deep-purple" dark fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
     
      <v-switch v-model="switch1" @click="changeColor()"  inset class="mt-4">Dark Mode</v-switch>
      <v-btn  elevation="3" color="orange">Logout</v-btn>
    </v-app-bar>

      <!-- the component  view -->
      <v-container class="fill-height contain-top" :style="style">
        <router-view></router-view>
      </v-container>
      <!-- the component view -->

    <!-- navigation drawer -->
      <v-navigation-drawer v-model="drawer" absolute temporary fixed :style="style">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-title>@josh</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
             @click="innerNavigation(item.route)"
          >
            <v-list-item-icon>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content :style="color">
              <!-- <router-link >{{item.title}}</router-link> -->
              <v-list-item-title >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- /drawer end here -->
    </v-sheet>
  </v-app>
</div>
</template> 
<script>
  export default {
    data () {
      return {
      drawer: null,
        items: [
          { title: 'Darshboard', icon: 'mdi-home-city',color:'orange', route:'/darsh'},
          { title: 'AddCoin', icon: 'mdi-forum',color:'orange', route:'/adds' },
          { title: 'My Account', icon: 'mdi-account',color:'orange', route:'/addcoin' },
          { title: 'Users', icon: 'mdi-account-group-outline',color:'orange' },
        ],
        style:'',
        color:'',
        switch1: true,
      }
    },
    methods:{
      innerNavigation(value){
        this.$router.push(`${value}`)
        
      },
      changeColor(){
        // alert("opfoef")
        if(this.switch1 == false){
          this.style ={
             backgroundColor:"black",
             color:"white"
           }
           this.color ={
             color:'white'
           }
        }else{
           this.style ={
             backgroundColor:"white",
             color:"black"
           }
           this.color ={
             color:'black'
           }
        }
      }
    }
  }
</script>
<style scoped>
  .v-sheet::v-deep.v-app-bar.v-toolbar{
    /* color:red; */
    background-color: #57b846 !important;
    /* height: 45px !important; */
    /* padding: 40px 20px 40px !important; */
  
  }
  .contain-top{
    margin-top: 50px
  }
</style>


