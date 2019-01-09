const reducer = (state = {}, action) => {
    switch(action.type) {
        case "UPDATE_USER": {
            return {...state, user: action.user}
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
        default: {
            return state;
        }
    }
}

export default reducer

// const INTIAL_STATE ={
//     userName:'Ayan',
//     fname:'Murad',
// };

// export default (states = INTIAL_STATE , action)=>{
//     switch(action.type){
//         default:
//         return states
//     }
// }