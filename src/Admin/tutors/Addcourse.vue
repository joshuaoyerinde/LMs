<template>
    <div class="container">
        <h3>Tutors Page</h3>
            <div class="card-expansion">
                <md-card>
                    <div class="row mt-3">
                        <div class="col-md-8 col-sm-8 col-lg-8">
                            <md-card-header>
                                <div class="md-subhead">Registering of course</div>
                                        <!-- <div class="md-subhead">Subtitle here</div> -->
                            </md-card-header>
                            <div class="row">
                                <div class="col-md-4 col-sm-4 mx-auto">
                                    <md-card-media class="p-2">
                                        <img src="../../assets/undraw_male_avatar_323b.svg" alt="People">
                                    </md-card-media>
                                </div>
                                <!-- col-8----- -->
                                <div class="col-md-8">
                                    <form @submit.prevent="onSubmitCourse" class="mt-3">
                                    <div class="row p-2 justify-content-center">
                                        <div class="form-group col-md-11">
                                            <v-select
                                            :items="items"
                                            label="Select Course"
                                            dense
                                            solo
                                            v-model="coursename"
                                            ></v-select>
                                        </div>  
                                        <div class="form-group col-md-11 mt-n2">
                                          <textarea style="resize: none;" class="form-control" v-model="description" placeholder="Ccourse Description.."   cols="20" rows="5"></textarea>
                                        </div>  
                                    </div>
                                    <div class="">
                                        <button type="submit" class="btn">Add Course</button>
                                    </div>
                                    </form>
                                </div>
                        <!-- col-8 -->
                             </div>
                        </div>
                        <!-- div 8 -->
                        <div class="col-md-4 col-sm-4 p-5">
                              <div class="image-upload-wrap">
                                    <input class="file-upload-input" type='file'  @change="previewImage" />
                                <div class="drag-text">
                                    <div>Drag and drop a file or select add Image</div>
                                 </div>
                             </div>
                            <div class="">
                                <!-- <img :src="preview" alt="" class="mg-fluid">     -->
                                <video :src="preview"  width="100" ></video>
                                <div>{{image.name}}</div>
                                <div>{{image.size}}</div>
                            </div>   
                        </div>
                    </div>
                    <div class="p-2 text-center">
                       <span style="color:#F9682F">Power By @ 2021</span>
                      This a learning management system provides an instructor with a way <br/> to create and deliver content, monitor student participation and assess student ...
                    </div>
                </md-card>
            </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Addcourse",
    data:()=>({
          items: ['Angular', 'Python', 'Graphics', 'Web Developent', 'Vue', 'React'],
            preview: "",
            image: "",
            coursename:'',
            description:'',
            URL:"http://localhost:8000/api/createcourse"
    }),
    methods:{
        // upload(e){
        //     let image = e.target.files[0];
        //     this.image = image.name;
        //     console.log(image.name)
        // }
        previewImage: function(event) {
        let input = event.target;
            if (input.files) {
                let reader = new FileReader();
                reader.onload = (e) => {
                this.preview = e.target.result;
                // console.log( this.preview)
                }
                this.image=input.files[0];
              
                reader.readAsDataURL(input.files[0]);
            }
        },
        onSubmitCourse(){
              console.log(this.image)
              let formdata  = new FormData();
              formdata.append('coursename', this.coursename);
              formdata.append('desciption', this.description);
              formdata.append('file_upload',this.image);
              axios.post(this.URL,formdata).then(res=>{
                  console.log(res);
              })

              
        }

    }

}
</script>
<style scoped src="./addcourse.css"></style>


