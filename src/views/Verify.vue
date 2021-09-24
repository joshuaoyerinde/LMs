<template>
    <div> 
        <div class="container-notice">
            <div class="text">
                <h3>Welcome to Uriel Academy</h3>
                <p>Congrats your account have been Verify</p>
                <div class="text-center">
                    <button @click="loginRoute" class="stated-btn2">Click to Proceed</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Verify',
    data:()=>({
         URL:"http://localhost:8000/api/verify",
    }),
    methods:{
        loginRoute(){
            // this.$router.push({name:'Home'})
                let token = this.$route.params.id;
                let formtk = new FormData();
                formtk.append('tokenize', token)
                axios.post(this.URL,formtk)
                .then(res=>{
                    if (res.status == 200) {
                        this.$router.replace({path:'/user'});
                        console.log(res.data);
                    }
                })
        }
    },
    mounted(){
     
    }

}
</script>
<style scoped>
@font-face {
    font-family: Poppins-Bold;
    src: url('../assets/poppins/Poppins-Bold.ttf'); 
  }
.container-notice{
    width: 100%;  
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: #9053c7;  
    /* background: -webkit-linear-gradient(-135deg, #f1d8f0, #c7cadb);
    background: -o-linear-gradient(-135deg, #b3b1b2, #fbfcff);
    background: -moz-linear-gradient(-135deg, #555555, #f7f8fd);
    background: linear-gradient(-135deg, #ebd6e9, #38393b); */
  }
  .text h3{
      font-family: Poppins-Regular;
      font-size: 27px;
      text-shadow: 2px 1px  white

  }
  p{
      color:white;
      text-align: center;
  }
.stated-btn2{
    /* display: inline-block; */
    /* padding: 10px 80px 20px; */
    padding: 17px;
    width: 200px;
    border-radius: 2px;
    transition: 0.5s;
    line-height: 1;
    /* margin: 0 102px; */
    color: white;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    /* border: 2px solid #F9682F; */
    background-color: #F9682F;
    font-weight: 500;
    font-size: 14px;
  }
  .stated-btn2:hover{
    background-color: white;
    color: #F9682F;
  }
</style>

