import axios from "axios";
const actions={
    funcIncrease({commit},num){
        commit('increasenum',num);
    },

    //ADMIN ACTION LOGIN .........
   async adminUSerLogin({commit},details){
        let url = "http://localhost:8000/api/adminlogin"
        let res = await axios.post(url,details)
         console.log(res.data.success);
         let hh = res.data;
         console.log(hh)
         commit('GET_RESPONSE', res.data.success)
        // console.log(details);
    }
    //.............
}
export default actions