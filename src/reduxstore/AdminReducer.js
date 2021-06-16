let AdminReducer = (
    state={
        isUploaded : false
    },
    action
)=>{
    switch(action.type) {
        case "ADD_CAKE_SUCCESS" : {
            state = {...state}
            state["isUploaded"] = true
        }
        case "ADD_CAKE_FAILURE" : {
            state = {...state}
            state["isUploaded"] = false
        }
        default : return state
    }
}

export default AdminReducer