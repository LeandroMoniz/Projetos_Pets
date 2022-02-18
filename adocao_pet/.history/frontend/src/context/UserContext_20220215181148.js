import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext()

function UserProvider({ children }) {

    const { register } = userAuth()

    return <Context.Provider valeu={{ register }}>{children}</Context.Provider>
}

export { Context, UserProvider }