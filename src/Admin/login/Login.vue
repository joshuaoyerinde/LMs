<template>
       <div class="container">
        <section data-bs-version="5.1" class="form7 cid-sIk1HJFjn0" id="form7-2">
        <div class="row justify-content-center mt-4">
            <div class="col-lg-8 mx-auto mbr-form" @submit.prevent="onSubmit">
                <form  class="mbr-form form-with-styler mx-auto" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true">
                <md-progress-bar md-mode="indeterminate" v-show="loading"></md-progress-bar>
                    <p class="mbr-text mbr-fonts-style align-center text-center mb-4 display-7">
                        Admin Login
                    </p>
                    <!-- <div v-if="msg" class="text-center text-danger">{{msg}}</div> -->
                    <div class="text-center mb-2">
                      <img src="../../assets/admin.svg" class="rounded-circle" alt="" width="150px">
                    </div>
                    <div class="dragArea row">
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-1" data-for="name">
                            <input type="text" v-model="email" placeholder="Email" data-form-field="name" class="form-control" value="" id="name-form7-2">
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <input type="password" v-model="password"  placeholder="Password" data-form-field="email" class="form-control" value="" id="email-form7-2">
                        </div>
                      
                        <div class="col-auto mbr-section-btn align-center mb-2">
                            <button type="submit" class="btn btn-primary mb-3 display-4">Submit</button>
                        </div>
                    </div>
                </form>
                <!-- for snack bar -->
                 <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
                    <span>{{msg}}!</span>
                    <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
                </md-snackbar>
            </div>
        </div>

        </section>
    </div>
</template>
<script>
// import {mapGetters,mapActions} from 'vuex';
import axios from 'axios';
export default {
    data:()=>({
        email:'',
        password:'', 
        URL:"http://localhost:8000/api/adminlogin",
        response:'',
        loading:false,
        msg:"",
        showSnackbar: false,
        position: 'center',
        duration: 8000,
        isInfinity: false

    }),
    // computed:{
    //     ...mapGetters(['responseadminlogin']),
    //     getres(){   
    //       return console.log(this.responseadminlogin);
    //     }
    // },
    methods:{
        // ...mapActions(['adminUSerLogin']),

        onSubmit(){
            this.loading = true
            let formadmin = new FormData();    
            formadmin.append('email', this.email);
            formadmin.append('password',this.password);
            axios.post(this.URL,formadmin)
            .then(res=>{
                // console.log(res);
                if (res.status == 200) {
                    this.loading = false
                    localStorage.setItem('auth',JSON.stringify(res.data.success));
                    console.log(res.data.success);
                    this.$router.replace({name:"tutors"});
                }
            })
            .catch(err=>{
                if (err) {
                      setTimeout(() => {
                        this.loading = false
                         this.showSnackbar = true
                        this.msg = "Invalid Details Please Login Again"
                    }, 5000);
                }
            })
        }

    },
    // mounted(){
    //     console.log(this.responseadminlogin);
    //     // this.onSubmit();
    //      this.adminUSerLogin();
    //      this.getres;
    // },
    // created(){
    //      this.adminUSerLogin();
    // }
}
</script>
<style scoped src="./login.css">
</style>

