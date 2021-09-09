import axios from "axios";
const actions={
    funcIncrease({commit},num){
        commit('increasenum',num);
    },

    //ADMIN ACTION LOGIN .........
   async adminUSerLogin({commit},details){
        let url = "http://localhost:8000/api/login"
        let response = await axios.post(url,details);
        commit('GET_RESPONSE', response.data)
    }
    //.............
}
export default actions