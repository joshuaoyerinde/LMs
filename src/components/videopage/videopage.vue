<template>
    <div>
        <Navbar/>
        <div class="container-fluid">
            <div class="ml-4 mt-4 p-4">            
        </div>
        <div class="row p-4 justify-content-center">
            <div class="col-md-8 col-12">
                <video src="../../assets/Laravel 8 Tutorial - Eloquent Relationship One to Many.mp4"  controls controlsList="nodownload" @contextmenu="removeMenu($event)"></video>
            </div>
            <div class="col-md-4 col-sm-4 mt-2 side-resources">
               <v-row justify="center">
                <v-expansion-panels accordion :style='{width:"95%",marginLeft:"4px"}' class="mt-2">
                    <v-expansion-panel
                    v-for="(item,i) in 10" 
                    :key="i"
                    >
                    <v-expansion-panel-header>Session 2:Getting stated </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                </v-row>
            </div>  
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
    computed:{
       
    },
    methods:{
          removeMenu: function(event){
            //  return false
            // e.preventDefault();
            // e.stopPropagation();
            // return false;
            var e = event || window.event;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        },
    },
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
    .side-resources{
        overflow-y: auto; 
        height: 80vh;
    }
</style>


