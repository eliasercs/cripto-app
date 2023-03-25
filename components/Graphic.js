import { useContext } from "react"
import {View, Text} from "react-native"
import { useEffect, useState } from 'react';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'


    const time = []
    const max = []

    async function Graph(id) {
        const [history, setHistory] = useState([])

        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=7`)
        if (!res.ok) {
          throw new Error("No se pudo obtener el historial de los valores")
        }
        const data = await res.json()
        setHistory(data)

        history.map((x) => time.push(new Date(x[0])))
        history.map((x) => max.push(x[2]))

        console.log(time)

    }
    const Graphic = (id) => {
        Graph(id)
        if(time){

        return (
        <View style={{ height: 200, flexDirection: 'row' }}>
            <YAxis
            data={time}
            contentInset={contentInset}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => {new Date(value)}}
        />
        <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={max}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={contentInset}
        >
        <Grid />
        </LineChart>
        </View>
        )}else{
            return(
                <Text>Has click para visualizar un grafico</Text>
            )
        }
        };
    export default Graphic;