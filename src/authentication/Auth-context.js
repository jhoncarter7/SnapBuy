
import React from "react"

import { useState } from "react"


const AuthContext =  React.createContext({
    token: "",
    localId: "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=> {}
}
) 

export const AuthContextProvider = (props) => {
const [token, setToken] = useState(null)
const [localId, setLocalId] = useState(null)

 const  userIsLoggedIn = !!token && !!localId

 const loginHandler = (token, localId) => {
    setToken(token)
    setLocalId(localId)
 }

 const logoutHandler = () => {
    setToken(null)
    setLocalId(null)
 }

 const contextValue = {
   token: token,
   localId: localId,
   isLoggedIn: userIsLoggedIn,
   login: loginHandler,
   logout: logoutHandler
 }

return <AuthContext.Provider value={contextValue}>
    {props.children}
</AuthContext.Provider>
}

export default AuthContext


