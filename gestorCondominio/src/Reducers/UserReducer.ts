import AsyncStorage from "@react-native-async-storage/async-storage";

const initiaState = {
    token:'',
    user:{},
    property:{},
}

export default (state = initiaState, action = {}) =>{
    switch (action.type){
        case 'setToken':
            AsyncStorage.setItem('token', action.payload.token)
            return {...state, token: action.payload.token}
        break
        case 'setUser':
            return {...state, token: action.payload.property}
        break
        case 'setProperty':
            return {...state, token: action.payload.property}
        break
    }
    return state
}
