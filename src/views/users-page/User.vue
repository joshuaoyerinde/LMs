<template>
    <div>
      <Navbar/>
       <div class="wrapper wrapper-light mt-5">
        <div class="scrollable-container">
          <div class="scrollable-cards">
            <div class="card-h">
              <div class="card-thumbnail">
                <img src="https://res.cloudinary.com/hammv7x3f/image/upload/c_fill,g_face,h_320,w_320/v1522503864/ngpb7rercmaftyoanant.jpg">
                <div class="card-specialties">
                  <!-- ART-THÉRAPIE -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Réflexologie de confort & Expression par le rythme
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
                <img src="https://res.cloudinary.com/hammv7x3f/image/upload/c_fill,g_face,h_320,w_320/v1522748419/lz9awyiyhu3art6p8xsg.jpg">
                
                <div class="card-specialties">
                  Access Bars® <br>
                  NATUROPATHIE <br>
                  NUTRITION <br>
                  PLANTES & HUILES ESSENTIELLES
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Réflexologie de confort
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
                <img src="https://res.cloudinary.com/hammv7x3f/image/upload/c_fill,g_face,h_320,w_320/v1542202459/ilncu71pfjlq2ilei7gl.jpg">
                <div class="card-specialties">
                  EMDR <br>
                  PSYCHO-ÉNERGÉTIQUE <br>
                  RESPIRATION HOLOTROPIQUE
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  Fenêtre sur soi et créativité : Champ d'argile®, Soulcollage®
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
                <img src="https://res.cloudinary.com/hammv7x3f/image/upload/c_fill,g_face,h_320,w_320/v1542904330/uycx26c5rajzsynaapzf.jpg">
                
                <div class="card-specialties">
                  YOGA <br>
                  YOGA DE L'ÉNERGIE <br>
                  RUNNING <br>
                </div>
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
