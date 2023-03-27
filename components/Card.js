import { useContext } from "react"
import {View, Text, Image, TouchableHighlight, Alert} from "react-native"
import { CryptoContext } from "../context/CryptoContext"
import styles from "../utils/styles"

const Card = ({title, url, id}) => {

    const {setCrypto, setLabel, setMax} = useContext(CryptoContext)

    async function loadData(id) {
        let Max = []
        let Time = []
    
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=7`)
        console.log(res.ok)
        if (res.ok) {
          const data = await res.json()

          data.forEach(element => {
            Time.push(new Date(element[0]))
            Max.push(element[2])
          });
    
          setLabel(Time)
          setMax(Max)
        } else {
          throw new Error(`[STATUS CODE ${res.status}] => Límite de peticiones superados.`)
        }
    }
    
    const handleClick = (id) => {
        try {
          loadData(id)
        } catch (error) {
          Alert.alert("Advertencia", error.message, [
            {
              cancelable: true,
              text: "Cerrar",
              style: "cancel"
            }
          ])
        }
    }

    const handleTouch = () => {
        setCrypto({
            name: title,
            url,
            id
        })
        handleClick(id)
    }

    return (<TouchableHighlight underlayColor="white" onPress={handleTouch}>
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri: url}} />
            <Text>{title}</Text>
        </View>
    </TouchableHighlight>
    )
}

export default Card