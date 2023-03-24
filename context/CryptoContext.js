import { createContext, useState } from "react";

export const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {

    const [crypto, setCrypto] = useState({
        name: "",
        url: ""
    })

    return (<CryptoContext.Provider value={{crypto, setCrypto}}>
        { children }
    </CryptoContext.Provider>)
}