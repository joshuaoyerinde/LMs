const mutations={
    increasenum(state,num){
        state.num = state.num + num;
    },
    // ADMIN  LOGIN FOR THE LMS RESPONSE............
    GET_RESPONSE(state,res){
        state.response = res
        console.log(res);
    },
    // ..........
    GET_COURSERES(state,res){
        state.course_res = res
        console.log(res)
    }
}

export default mutations;