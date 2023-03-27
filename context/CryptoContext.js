import { createContext, useState } from "react";

export const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {

    const [label, setLabel] = useState([])
    const [max, setMax] = useState([])

    const [crypto, setCrypto] = useState({
        name: "",
        url: "",
        id: 0
    })

    return (<CryptoContext.Provider value={{crypto, setCrypto, label, max, setLabel, setMax}}>
        { children }
    </CryptoContext.Provider>)
}