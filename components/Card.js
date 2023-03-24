import {View, Text, Image, TouchableHighlight} from "react-native"
import styles from "../utils/styles"

const Card = ({title, url}) => {

    const handleTouch = () => {

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