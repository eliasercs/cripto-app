import { useContext } from "react"
import {View, Text} from "react-native"
import {CryptoContext} from "../context/CryptoContext"
import { useEffect, useState } from 'react';
import Graphic from './Graphic.js';


const ChartContainer = () => {

    const {crypto} = useContext(CryptoContext)

    return (<View style={{width: "100%", height: "50%", alignItems: "center", justifyContent: "center"}}>
        <Text>{crypto.name === "" ? "Seleccione una criptomoneda." : crypto.name}</Text>
        <Graphic value={crypto.name}/>

    </View>)
}

export default ChartContainer