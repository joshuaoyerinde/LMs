<template>
    <div>
        <Navbar/>
        <div class="ml-5 mt-5 p-4">
        <h3 class="ml-5">Python Course Name</h3>
        <p class="ml-5">Mosh Olateju</p>
        </div>
        <div class="row p-4 justify-content-center">
            <div class="col-md-6">
                <video src="../../assets/Laravel 8 Tutorial - Eloquent Relationship One to Many.mp4" controls></video>
            </div>
            <div class="col-md-4 col-sm-3">
                
            </div>
        </div>
    </div>
</template>
<script>
// import video from ''
import Navbar from '../navbar/Navbar.vue'
export default {
    name:"Videopage",
    data:()=>({

    }),
    components:{
        Navbar 
    }
}
</script>
<style scoped>
    h3{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 400;
    }
    p{
        font-size: 14px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }
</style>


