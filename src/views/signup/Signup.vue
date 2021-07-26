 <template>
    <div>
        <div class="row">
            <div class="col-sm-4 col-md-4 box-side1 d-none d-md-block ">
               <div class="text-center" id="come">
                   WElcome
               </div>
            </div>
            <div class="col-md-8 box-side-2">
                <div class="p-2">
                    <h2>Learning form the <br> Best Professionals</h2>
                </div>
                <form action="">
                    <div class="row p-2">
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Firstname">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Lastname">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Phonenumber">
                        </div>  
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Password">
                        </div> 
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Confirm password">
                        </div>   
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Skills">
                        </div>
                        <div class="form-group col-md-11">
                            <input type="text" class="form-control" placeholder="Academic Level">
                        </div>      
                    </div>
                     <div class="mt-n4 mb-2">
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
// import countrycodes from "country-codes-list";
export default {
  data() {
    return {
        hideSignUp:false
    };
  },
  props:['hidesignUp'],
  methods:{
      hide(){
          this.$emit('hidesignUp',this.hideSignUp)
      }
  }
};
</script>
<style scoped src="./signup.css">

</style>