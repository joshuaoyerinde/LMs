<template>
    <div>
         <!-- ======= Hero Section ======= -->
         <Navbar @showDialogBox1="showDialogSignIn"/>
        <header id="header" class="mt-n5">
        </header>
        <section id="hero">
            <div class="hero-container">
                <div id="heroCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators" id="hero-carousel-indicators">
                        <li data-target="#heroCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#heroCarousel" data-slide-to="1" class=""></li>
                        <li data-target="#heroCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                    <!-- Slide 1 -->
                    <div class="carousel-item carousel-item-1 active" data-interval="2000">
                        <div class="carousel-container">
                        <div class="carousel-content">
                            <div class="col-md-7">
                                <h2 class="animate__animated animate__fadeInUp col-12">
                                    Join Our Online Community learners at the comfort of Your Home
                                </h2>
                                <div class="mt-3 row">
                                    <div class="col-md-4 mt-1">
                                        <button class="stated-btn">Get stated</button>
                                    </div>
                                    <div class="col-md-4 mt-1">
                                        <button class="stated-btn2" @click="showSignUp">Create Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- slide 2 -->
                        <div class="carousel-item carousel-item-2 " data-interval="2000">
                            <div class="carousel-container">
                            <div class="carousel-content">
                                <div class="col-md-7">
                                    <h2 class="animate__animated animate__fadeInUp col-12">
                                        Taste Our Online Community learners at the comfort of Your Home
                                    </h2>
                                    <div class="mt-3 row">
                                        <div class="col-md-4">
                                             <button class="stated-btn mt-1">Get stated</button>
                                        </div>
                                        <div class="col-md-4">
                                            <button class="stated-btn2 mt-1" @click="showSignUp">Create Account</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                     <!-- slide 3 -->
                        <div class="carousel-item carousel-item-3 " data-interval="2000">
                            <div class="carousel-container">
                            <div class="carousel-content">
                                <div class="col-md-7">
                                    <h2 class="animate__animated animate__fadeInUp col-12">
                                        Taste Our Online Community learners at the comfort of Your Home
                                    </h2>
                                    <div class="mt-3 row">
                                        <div class="col-md-4">
                                             <button class="stated-btn mt-1">Get stated</button>
                                        </div>
                                        <div class="col-md-4">
                                            <button class="stated-btn2 mt-1" @click="showSignUp">Create Account</button>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                   
                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon icofont-simple-left"></span>
                    <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>

                </div>
            
            </div>
           
        </section>
        <md-dialog :md-active.sync="showDialog">
            <Login @hideLogin="hideSignUpBox" />
        </md-dialog>
        <md-dialog :md-active.sync="showDialog2">
            <Signup @hidesignUp="showSignUp"/>
        </md-dialog>
      
    </div>
</template>
<script>
import Navbar from '../navbar/Navbar.vue'
import Login from '../../views/login/Login.vue'
import Signup from '../../views/signup/Signup.vue'
import image from '../../assets/pics/woman.png' 
export default {
    data:()=>({
        image:image,
        showDialog: false,
        showDialog2:false
    }), 

    components:{
        Navbar,
        Login,
        Signup
    },
    methods:{
        showDialogSignIn(ind){
            this.showDialog=ind
        },
        hideSignUpBox(hide){
            if (this.showDialog == this.showDialogSignIn) {
                this.showDialog = false;
            }
            this.showDialog = hide
        },
        showSignUp(sign){
            if(this.showSignUp == false){

                this.showDialog2=true
            }else{
                this.showDialog2=sign
            }
        }
    }
}
</script>
<style scoped lang='css' src="./header.css"></style>