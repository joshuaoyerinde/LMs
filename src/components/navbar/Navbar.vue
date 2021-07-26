<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark shadow-sm fixed-top" style="background-color: #F9682F;">
            <a class="navbar-brand" href="#">LMS</a>
                <form class="form-inline my-2 ml-5 my-lg-0">
                    <input class="form-control search mr-sm-2" type="text" placeholder="Search">
                </form>
                <i class="fa fa-bars navbar-toggler d-lg-none" aria-hidden="true" style="color:white" data-toggle="collapse" data-target="#collapsibleNavId"    aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></i>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto mr-5 mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        <div class="radio-box mt-n2 text-center"></div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Courses</a>
                        <div class="radio-box mt-n2"></div>
                    </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                        <div class="radio-box mt-n2"></div>
                    </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Gallery</a>
                        <div class="radio-box mt-n2"></div>
                    </li>
                    <li class="nav-item active mt-1">
                        <button class="nav-link nav-button" @click="showDialogBox()">Sign in</button>
                    </li>
                </ul>
            </div>
        </nav>
      
    </div>
    
</template>
<script>
// import Login from '../../views/login/Login.vue'
export default {
    name:'Navbar',
    data:()=>({
        showDialog:true
       
    }),

    // computed:{
    props:['showDialogBox1'],
       
    // }
    methods:{
        showDialogBox(){
            //   if(this.showDialog==true){
            //       this.showDialog=false;
            //   }
            //   else{
            //       this.showDialog=true
            //   }
              this.$emit('showDialogBox1',this.showDialog)
        }
    }
}
</script>
<style scoped lang='css' src="./navbar.css"></style>