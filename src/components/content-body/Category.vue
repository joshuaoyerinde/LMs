<template>
    <div class="">

        <div class="jumbotron">
            <div class="container-fluid">
                    <h2 class="text-center">Learn Something Now!</h2>
               
                <div class="mt-4 ml-5">
                    <h3>Categories</h3>
                    
                </div>
                <div>
                    <md-tabs md-sync-route md-alignment="centered">
                        <md-tab id="tab-home" md-label="Python" to="/python" exact>
                            <router-view></router-view>
                        </md-tab>

                        <md-tab id="tab-pages" md-label="Web development">
                        </md-tab>

                        <md-tab id="tab-posts" md-label="Javascript" to="/components/tabs/posts">
                        </md-tab>

                        <md-tab id="tab-favorites" md-label="Graphic Design" to="/components/tabs/favorites">
                        </md-tab>
                        <md-tab id="tab-favorites" md-label="Videography" to="/components/tabs/favorites">
                        </md-tab>
                    </md-tabs>
                </div>
            </div>
            </div>
            <!-- general topic -->
            <div class="container">
            <h3>General Topics</h3>
            <div class="ml-4">
                <div class="row mt-4 mb-5 justify-content-center">
                    <div class="col-sm-6 col-md-3 item mt-1">
                        <h4>Development</h4>
                        <ul>
                            <li><a href="#">Pyhton</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Machine Learning</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item mt-1">
                        <h4>IT</h4>
                        <ul>
                            <li><a href="#">Robotics</a></li>
                            <li><a href="#">Ethical Hacking</a></li>
                            <li><a href="#">Cyber Security</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item mt-1">
                        <h4>Design</h4>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Photoshop</a></li>
                            <li><a href="#">Illustration</a></li>
                            <li><a href="#">UI/UX</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item mt-1">
                        <h4>Business</h4>
                        <ul>
                            <li><a href="#">SQL</a></li>
                            <li><a href="#">PMP</a></li>
                            <li><a href="#">Hosting</a></li>
                            <li><a href="#">Finacial Analysis</a></li>
                            <!-- <button @click="ready()">kkkkk</button> -->
                        </ul>
                    </div>
    
                </div>
              
            </div>
             
        </div>
        <div>
        <Instructor></Instructor>
           
        </div>
        <!-- for owl page -->
    </div>        
</template>
<script>
import Instructor from '../intructor/Instructor.vue'
export default {
    name:'Catego',
    data:()=>({
        
        }),
    components:{
        Instructor
    }

}
</script>
<style scoped lang="css" src="./categories.css"></style>