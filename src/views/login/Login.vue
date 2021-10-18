
<template>
  <!-- <div> -->
    <!-- <md-dialog :md-active.sync="showDialog"> -->
        <div class="row">
            <div class="col-md-4 d-none d-md-block side-1 ">
            <div class="text-center p-5" id="come">
                Welcome
            </div>
            </div>
            <div class="col-md-8 bg-white ">
                <div class="">
                    <div class="float-right mr-4 mt-4">
                       <button @click="hideDialog"><i class="fa fa-times" aria-hidden="true"></i></button> 
                    </div>
                </div>
                <form @submit.prevent="onSubmitLogin">
                <md-progress-bar md-mode="indeterminate" v-show="loading"></md-progress-bar>
                    <div class="row p-4 mt-5">
                        <div class="col-md-12 mb-4">
                            <input type="text" name="" v-model="email" class="form-control" placeholder="Enter Email" >
                        </div>
                        <div class="col-md-12">
                            <input type="text" v-model="password" class="form-control" placeholder="Enter Password" >
                        </div>
                        <div class="checkbox ml-3 mt-2" id="keep">
                            <label><input type="checkbox"> Keep me signed in</label>
                            <router-link to="" class="forget" href="">Forget Password?</router-link>
                        </div>
                    </div>
                    <div class="mt-n4 mb-2">
                        <button type="submit" class="btn">Sign In</button>
                    </div>
                    <div class="text-center">
                        <p class="sign">Don't have an account yet? <a href="">Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    <!-- </md-dialog> -->
    <!-- <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button> -->
  <!-- </div> -->
</template>

<script>
import axios from 'axios';
  export default {
    name: 'Login',
    data: () => ({
        showDialog: false,
        email:"",
        password:"",
        URL:"http://localhost:8000/api/login",
        loading:false
    }),
    props:['hideLogin'],
    methods:{
        hideDialog(){
            this.$emit("hideLogin",this.showDialog);
        },
        onSubmitLogin(){
            let dataLogin = new FormData()
            dataLogin.append('email', this.email)
            dataLogin.append('password', this.password)
            this.loading = true
            axios.post(this.URL, dataLogin).then(res=>{
                if(res.status == 200){
                    this.loading = false
                    console.log(res.data);
                    localStorage.setItem('token_lm', res.data.access_token);
                }
            }).catch(err=>{
                  setTimeout(() => {
                        this.loading = false
                         this.showSnackbar = true
                        this.msg = "Invalid Details Please Login Again"
                }, 5000);
                console.log(err)
            })
        }
    }
  }
</script>
<style lang="css" scoped src="./login.css"></style>