<template>
    <div>
        <Navbar/>
        <div class="container-fluid container-bg">
            <div class="row p-5 justify-content-center">
                <div class="col-md-6 pt-4 mt-4">
                    <div>
                        <h5 class="course-title">{{course.course_desc}}</h5>
                        <p class="description">Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
                    </div>
                </div>
                <div class="col-12 col-md-5  pt-2 mt-1">
                  <div class="card" v-for="(file, i) in course.course_file" :key="i">
                      <video :src="url+file.file_name" controls type="video/mp4"></video>
                        <!-- <iframe :src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                        <div class="card-body">
                            <div class="card-title">$ <span>500</span></div>
                           <b>This course includes:</b> 
                           <ul class="nav flex-column">
                               <li>22 hours on-demand video</li>
                                <li>14 articles</li>
                                <li>19 coding exercises</li>
                           </ul>
                           <div class="text-center">
                                <paystack
                                    :amount="amount * 100"
                                    :email="email"
                                    :paystackkey="PUBLIC_KEY"
                                    :reference="reference"
                                    :callback="processPayment"
                                    :close="close"
                                    class="btn-payment mt-1"
                                >
                                Make Payment
                                </paystack>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
</template>

<script>
import Navbar from '../../components/navbar/Navbar.vue'
import paystack from 'vue-paystack'
export default {
    name:"Course",
    data:()=>({
        course:JSON.parse(localStorage.getItem('eachcourse')),
        url:"storage/videos/",
        video_file:"",
        amount: 0,
        full_name: '',
        email: '',
        reference:'',
        PUBLIC_KEY:'pk_test_5e72e62644d8e95d662f685ccceae48bc345bd61'
    }),
    components:{
        Navbar,
        paystack
    },
    computed: {
    reference() {
        let text = "";
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
            // console.log(text);
        }
    },
    methods:{
        getVideoFile(){
            this.course.course_file.forEach(each => {
                this.video_file = each.file_name
                console.log(each)
            });
        },
        processPayment: (res) => {
            window.alert("Payment recieved")
            console.log(res)
        },
        close: () => {
            console.log("You closed checkout page")
        }
    },
    created(){
        console.log(this.course);
    },
    mounted(){
        this.getVideoFile();
        
    }
}
</script>
<style scoped>
    .container-bg{
        margin-top: 50px;
        background-color: rgba(0, 0, 0, 0.885);
        min-height: 100vh;
    }
    video{
         height: 40vh !important;
    }
    .card{
        /* height: 70vh; */
    }
    .course-title{
        color: white;
        font-weight: 600;
        font-size: 32px
    }
    .description{
        color: white;
        font-size: 17px
    }
    .card-title{
        font-size: 30px;
        font-weight: 600
    }
    li{
        line-height: 2
    }
    .btn-payment{
        border: 1px solid #F9682F;
        padding: 10px 35px 10px;
        margin-bottom: 20px;
        font-size: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 600;
        color: #F9682F
        /* font-family: 'Courier New', Courier, monospace */
    }
      .btn-payment:hover{
          background: #F9682F;
          color: white          
      }
      /* @media (max-width: 660px) {
          .card{
              width: 400px;
          }
      } */
</style>

