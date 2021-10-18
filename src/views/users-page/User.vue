<template>
    <div>
      <Navbar v-bind:userdata="getusername.email"/>
      <header class="header">
        <div class="header-image">
          <div class="header-transparent">
            <div class="header-content">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis, cupiditate non temporibus tempore distinctio fugit nam illo totam pariatur expedita delectus sequi tempora velit ipsam fugiat magnam quos. Eos!
            </div>
              <!-- <ul class="nav justify-content-center">
                  <li class="nav-item">
                      <a class="nav-link active" href="#">Active link</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-white" href="#">Link iwdhquiqwuqwuifquiwuiuuidchuvuui</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled link</a>
                  </li>
              </ul> -->
          </div>
        </div>
      </header>
       <div class="wrapper wrapper-light mt-2">
        <div class="scrollable-container">
          <div class="scrollable-cards">
            <!-- the cards -->
            <div class="card-h" v-for="course in courses" :key="course.id">
              <div class="card-thumbnail">
                  <img :src="img">
                <div class="card-specialties">
                  <!-- ART-THÉRAPIE -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <div class="course-desc" @click="getuserCourses(course.course_desc,course)">
                     {{course.course_desc}}
                  </div>
                   <!-- <router-link to="/course">
                     
                  </router-link> -->
                </h3>
                <div class="card-name">
                 {{course.course_name}}
                </div>
              </div>
              <div class="card-foot">
                <div class="card-rating">
                  <div class="stars">
                      <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  7 comment
                      <div> {{getnum}} </div>
                  <button @click="funcIncrease(2)">Count</button>
                </div>
              </div>
            </div>
            
            <!-- ends/// -->
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Navbar from '../../components/navbar/Navbar.vue'
import Footer from '../../components/footer/Footer.vue'
import { mapGetters, mapActions,mapState} from 'vuex';
// import { match } from 'minimatch';
export default {
    name:"User",
    data:()=>({
        courseimage:new Array(
          `${require('../../assets/pics/pt-1.png')}`,
          `${require('../../assets/pics/andrey-suslov.png')}`,
          `${require('../../assets/pics/python-popularity.png')}`
        ),
         user:"",
         getusername:"",
         img:''

    }),
    // user methods.......
    components:{
      Navbar,
      Footer
    },
    computed:{
      ...mapGetters(['getnum','getcourses']),
      ...mapState(['isLoginUserName']),
      courses(){
        return this.getcourses
      },
      getLoginUser(){
        return console.log(this.isLoginUserName);
      }
    },
    methods:{
      ...mapActions(['funcIncrease','getCoursesList']),
      getUserDetails(){
          this.user = JSON.parse(localStorage.getItem('users_details'));
          this.user.forEach(data => {
            this.getusername = data;
              console.log(this.getusername);
          });
      },
      // 
      fetchCourse(){
        this.getCoursesList()
        this.courses =  this.getcourses
        console.log(this.courses) 

      },
      // routing method for each courses
      getuserCourses(param,courses){
          this.$router.push('/course/'+param);
          console.log(param,courses);
          localStorage.setItem('eachcourse',JSON.stringify(courses));
      }
    },
    created(){
       let token = localStorage.token_lm;
        let auth = JSON.parse(atob(token.split('.')[1]));
        console.log(auth);
        this.getUserDetails();
        //images for each courses......
        console.log( this.courseimage.length)
        let images = Math.floor(Math.random()*this.courseimage.length);
        this.img = this.courseimage[images]
        console.log(this.img)
        this.getLoginUser()
        
        // for (let index = 0; index < this.courseimage.length; index++) {
        //     const element = this.courseimage[index];
        //     let img = Math.floor(Math.random()* 3)
        //     this.img = this.img[img]
        //     console.log(this.img)
          
        // }
        // this.courseimage.forEach(each => {
        //   this.img = each[0]
        //     console.log(this.img)
        // });
    },
    mounted(){
      this.fetchCourse();
    }
    
}
</script>

<style scoped src="./user.css"></style>
