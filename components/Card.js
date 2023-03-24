import { useContext } from "react"
import {View, Text, Image, TouchableHighlight} from "react-native"
import { CryptoContext } from "../context/CryptoContext"
import styles from "../utils/styles"

const Card = ({title, url}) => {

    const {setCrypto} = useContext(CryptoContext)

    const handleTouch = () => {
        setCrypto({
            name: title,
            url
        })
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