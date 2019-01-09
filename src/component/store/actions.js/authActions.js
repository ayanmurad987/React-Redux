const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user
    }
}

const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

export {
    updateUser,
    removeUser
}

// const INTIAL_STATE ={
//     userName:'ayan'
// };

// export default (states = INTIAL_STATE , action)=>{
//     switch(action.type){
//         default:
//         return states
//     }
// }