const initialState ={
    loading: true,
    data: []
}

export default function(state = initialState, action){

    switch(action.type){
        case "GET_DASHBOARD_INFO":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "GET_DASHBOARD_INFO_ERROR":
            return {
                ...state,
                loading: false,
                data: null
            }
        default:
            return state;
    }
}