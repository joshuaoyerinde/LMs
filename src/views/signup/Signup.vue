 <template>
    <div>
        <div class="row">
            <div class="col-sm-4 col-md-4 box-side1 d-none d-md-block ">
               <div class="text-center" id="come">
                   WELCOME
               </div>
            </div>
            <div class="col-md-8 box-side-2">
                <div class="p-2">
                    <h2>Learning form the <br> Best Professionals</h2>
                </div>
                <form action="" @submit.prevent="onSubmitRegister">
                    <div class="row p-2">
                        <div class="form-group col-md-11">
                            <input type="text" v-model="firstname" class="form-control" placeholder="Firstname">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" v-model="lastname" class="form-control" placeholder="Lastname">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" v-model="phone" class="form-control" placeholder="Phonenumber">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" v-model="skill" class="form-control" placeholder="Skills">
                        </div>
                        <div class="form-group col-md-11">
                            <input type="text" v-model="email" class="form-control" placeholder="Email">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" v-model="password" class="form-control" placeholder="Password">
                        </div> 
                        <!-- <div class="form-group col-md-11">
                            <input type="text" v-model="confirm" class="form-control" placeholder="Confirm password">
                        </div>    -->
                        <div class="form-group col-md-11">
                            <input type="text" v-model="level" class="form-control" placeholder="Academic Level">
                        </div>      
                    </div>
                     <div class="mt-n4 mb-2"> 
                        <md-progress-spinner v-if="spinner" class="md-accent" :md-diameter="30" md-mode="indeterminate"></md-progress-spinner>
                        <button type="submit" class="btn">Sign up</button>
                    </div>
                    <div class="acc-text">
                        <p class="sign">Don't have an account yet? <a href="">Sign in</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import countrycodes from "country-codes-list";
export default {
  data() {
    return {
        hideSignUp:false,
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        skill:'',
        level:'',
        URL:"http://localhost:8000/api/register",
        spinner : false
    };
  },
  props:['hidesignUp'],
  methods:{
      hide(){
          this.$emit('hidesignUp',this.hideSignUp)
      },
      onSubmitRegister(){
          this.spinner = true
          let registerForm = new FormData();
          registerForm.append('firstname', this.firstname)
          registerForm.append('lastname', this.lastname)
          registerForm.append('phone', this.phone)
          registerForm.append('skill', this.skill)
          registerForm.append('email', this.email)
          registerForm.append('password', this.password)
          registerForm.append('level', this.level)
          axios.post(this.URL,registerForm).then(res=>{
              console.log(res)
              setTimeout(() => {
                  this.spinner = false
                  if (res.data.status == 200) {
                      console.log("nice login")
                      this.spinner = false
                      this.$router.push('/notice');
                  }else if(res.data.status == 500){
                      this.spinner = true;
                  }
              }, 3000);
          })
        //   alert('joshua')
      }

  }
};
</script>
<style scoped src="./signup.css">

</style>