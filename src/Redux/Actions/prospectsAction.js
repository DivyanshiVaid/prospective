// export const GET_USER="GET_USER";
export const ADD_USER="ADD_USER";
export const DELETE_USER="DELETE_USER";
export const EDIT_USER="EDIT_USER";
export const ADD_USER_IN_C2="ADD_USER_IN_C2"
export const EDIT_USER_IN_C2="EDIT_USER_IN_C2"
export const DELETE_USER_FROM_C2=" DELETE_USER_FROM_C2"
export const CLEAR_PROSPECTS="CLEAR_PROSPECTS"


export const clearProspects=(payload)=>{
    return{
        type:"CLEAR_PROSPECTS",
        payload
    }
}

export const addUser=(add)=>{
    return{
        type:"ADD_USER",
        add
    }
}
export const deleteUser=(del)=>{
    console.log("deleted")
    return{
        type:"DELETE_USER",
        del
    }
    
}
export const editUser=(edit)=>{
    return{
        type:"EDIT_USER",
        edit
    }
}

export const addUserInC2=(payload)=>{
    return{
        type:"ADD_USER_IN_C2",
        payload
    }
}
export const editUserInC2=(edit)=>{
    return{
        type:"EDIT_USER_IN_C2",
        edit
    }
}
export const deleteUserFromC2=( payload)=>{
    return{
        type:" DELETE_USER_FROM_C2",
        payload
    }
}

