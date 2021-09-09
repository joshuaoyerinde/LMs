<template>
       <div class="container">
        <section data-bs-version="5.1" class="form7 cid-sIk1HJFjn0" id="form7-2">
        <div class="row justify-content-center mt-4">
            <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                <form  class="mbr-form form-with-styler mx-auto" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true">
                    <p class="mbr-text mbr-fonts-style align-center text-center mb-4 display-7">
                        Admin Login
                    </p>
                    <div class="text-center mb-2">
                      <img src="../../assets/admin.svg" class="rounded-circle" alt="" width="150px">
                    </div>
                    <div class="dragArea row">
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <input type="text" v-model="email" placeholder="Email" data-form-field="name" class="form-control" value="" id="name-form7-2">
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <input type="password" v-model="password"  placeholder="Password" data-form-field="email" class="form-control" value="" id="email-form7-2">
                        </div>
                      
                        <div class="col-auto mbr-section-btn align-center">
                            <button type="submit" class="btn btn-primary display-4">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        </section>
    </div>
</template>
<script>
export default {
    data:()=>({
        email:'',
        password:''

        
    })   
}
</script>
<style scoped src="./login.css">
</style>

