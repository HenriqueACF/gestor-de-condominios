import React, { createContext, useContext, useReducer } from 'react';

import useReducer from '../reducers/UserReducer';

const initialState = {
    user: useReducer()
};

const MainReducer = (state, actio) =>({
    user:useReducer(state.user, action)
});

export const StateContext = createContext();

export const StateProvider = ({children}) =>{
    const [state, dispatch] = useReducer(MainReducer, initialState);

    return(
        <StateContext.Provider valeu={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () =>useContext(StateContext);