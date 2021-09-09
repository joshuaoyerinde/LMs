const mutations={
    increasenum(state,num){
        state.num = state.num + num;
    },
    // ADMIN  LOGIN FOR THE LMS RESPONSE............
    GET_RESPONSE(state,res){
        state.response = res
    }
    // ..........
}

export default mutations;