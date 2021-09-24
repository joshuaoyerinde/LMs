<template>
    <div>
      <Navbar/>
       <div class="wrapper wrapper-light mt-5">
        <div class="scrollable-container">
          <div class="scrollable-cards">
            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/pt-1.png">
                <div class="card-specialties">
                  <!-- ART-THÉRAPIE -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Complete Python Course 2021
                </h3>
                <div class="card-name">
                  Alice Larrabure
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
                  7 commentaires
                </div>
              </div>
            </div>

            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/pt-1.png">
                <!-- <div class="card-specialties">
                </div> -->
              </div>
              <div class="card-body">
                <h3 class="card-title">
                 A complete Python Course For Beginners
                </h3>
                <div class="card-name">
                  Farah Benwahoud
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
                  20 commentaires
                </div>
              </div>
            </div>
                      
            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/andrey-suslov.png">
                <!-- <div class="card-specialties">
                  EMDR <br>
                  PSYCHO-ÉNERGÉTIQUE <br>
                  RESPIRATION HOLOTROPIQUE
                </div> -->
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Complete A.I Course from Beginner
                </h3>
                <div class="card-name">
                  Solange Lemoine
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
                  45 commentaires
                </div>
              </div>
            </div>

            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/python-popularity.png">
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Running Yoga
                </h3>
                <div class="card-name">
                  Philippe Carralou
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
                <h3> {{getnum}} </h3>

                  <button @click="funcIncrease(2)">Count</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- another section of courses -->
        <div class="wrapper wrapper-light mt-5">
        <div class="scrollable-container">
          <div class="scrollable-cards">
            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/pt-1.png">
                <div class="card-specialties">
                  <!-- ART-THÉRAPIE -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Complete Python Course 2021
                </h3>
                <div class="card-name">
                  Alice Larrabure
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
                  7 commentaires
                </div>
              </div>
            </div>

            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/pt-1.png">
                <!-- <div class="card-specialties">
                </div> -->
              </div>
              <div class="card-body">
                <h3 class="card-title">
                 A complete Python Course For Beginners
                </h3>
                <div class="card-name">
                  Farah Benwahoud
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
                  20 commentaires
                </div>
              </div>
            </div>
                      
            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/andrey-suslov.png">
                <!-- <div class="card-specialties">
                  EMDR <br>
                  PSYCHO-ÉNERGÉTIQUE <br>
                  RESPIRATION HOLOTROPIQUE
                </div> -->
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Complete A.I Course from Beginner
                </h3>
                <div class="card-name">
                  Solange Lemoine
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
                  45 commentaires
                </div>
              </div>
            </div>

            <div class="card-h">
              <div class="card-thumbnail">
                <img src="../../assets/pics/python-popularity.png">
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Running Yoga
                </h3>
                <div class="card-name">
                  Philippe Carralou
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
                <h3> {{getnum}} </h3>

                  <button @click="funcIncrease(2)">Count</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>
<script>
import Navbar from '../../components/navbar/Navbar.vue'
import Footer from '../../components/footer/Footer.vue'
import { mapGetters, mapActions} from 'vuex';
export default {
    name:"User",
    data:()=>({

    }),
    // user methods.......
    components:{
      Navbar,
      Footer
    },
    computed:{
      ...mapGetters(['getnum'])
    },
    methods:{
      ...mapActions(['funcIncrease'])
    }
}
</script>

<style scoped src="./user.css"></style>
