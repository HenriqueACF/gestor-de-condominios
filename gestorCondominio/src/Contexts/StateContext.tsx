import React, {createContext, useContext, useReducer} from "react";

import UserReducer from '../Reducers/UserReducer'

const initialState = {
    user: UserReducer()
}

const MainReducer = (state: any, action: any) => ({
    user: UserReducer(state.user, action)
})

export const StateContext = createContext()

export const StateProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(MainReducer, initialState)
    return(
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)
