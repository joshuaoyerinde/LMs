<template>
    <div class="team-grid">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Meet Our Instructors</h2>
                <p class="text-center"><a class="links" href="https://www.archimetric.com/what-is-wireframe/" target="_blank">For more Details</a></p>
            </div>
            <div class="row people animate__animated animate__fadeInUp">
                <div class="col-md-4 col-lg-3 item" v-for="(details,i) in instructors" :key="i">
                    <div class="box" :style="details.image">
                        <div class="cover">
                            <h3 class="name">{{details.name}}</h3>
                            <p class="title">{{details.title}}</p>
                            <div class="social">
                            <a href="#"><i class="fa fa-facebook-official"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import image from 
export default {
    name:'Intructor',
    data:()=>({
        instructors:[
            { 
                image:{
                    backgroundImage:`url(${require('../../assets/pics/instructors.png')})`
                },
                name: 'MR Wesley' ,
                title: 'An expert in Machine Learning'
            },
             {
                image:{
                    backgroundImage:`url(${require('../../assets/pics/team-2.jpg')})`
                },
                name: 'Miss Sarah' ,
                title: 'An expert in front end developement'
            },
            {
                image:{
                    backgroundImage:`url(${require('../../assets/pics/woman.png')})`
                },
                name: 'Miss Rhoda' ,
                title: 'An expert in Ui/Ux'
            },
            { 
                image:{
                    backgroundImage:`url(${require('../../assets/pics/team-3.jpg')})`
                },
                name: 'MR Josiah' ,
                title: 'An expert in pyhton'
            },
        ],
     
    }),
    methods:{
        instructorDetails(){
            // this.details
           console.log(this.instructors)
        }
    },
    created(){
        this.instructorDetails()
    },
}
</script>
<style lang="css" scoped src="./instructor.css"></style>