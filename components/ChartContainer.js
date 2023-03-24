import { useContext } from "react"
import {View, Text} from "react-native"
import {CryptoContext} from "../context/CryptoContext"

const ChartContainer = () => {

    const {crypto} = useContext(CryptoContext)

    console.log(crypto)

    return (<View style={{width: "100%", height: "50%", alignItems: "center", justifyContent: "center"}}>
        <Text>{crypto.name === "" ? "Seleccione una criptomoneda." : crypto.name}</Text>
    </View>)
}

export default ChartContainer