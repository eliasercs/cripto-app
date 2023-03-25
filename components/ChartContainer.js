import { useContext } from "react"
import {View, Text} from "react-native"
import {CryptoContext} from "../context/CryptoContext"

import Chart from "./Chart"

const ChartContainer = () => {

    const {crypto} = useContext(CryptoContext)

    console.log(crypto)

    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Rainy Days"] // optional
    }

    return (<View style={{width: "100%", height: "50%", alignItems: "center", justifyContent: "center"}}>
        <Text>{crypto.name === "" ? "Seleccione una criptomoneda." : crypto.name}</Text>

        <Chart data={data} />
    </View>)
}

export default ChartContainer