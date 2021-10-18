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
    },
    //.............
    getCoursesList({commit},res){
        const url = "http://127.0.0.1:8000/api/fetchcourses"
        axios.get(url).then(each=>{
            res = each.data
            console.log(res);
            commit('GET_COURSERES', res)
        })

    }
}
export default actions