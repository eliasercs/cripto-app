import { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from './components/Card';
import ChartContainer from './components/ChartContainer';
import NavBar from './components/NavBar';
import { CryptoProvider } from './context/CryptoContext';
import styles from './utils/styles';

export default function App() {

  const [coins, setCoins] = useState([])

  async function loadData() {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")
    if (!res.ok) {
      throw new Error("Error al realizar petición.")
    }
    const data = await res.json()
    setCoins(data)
  }

  useEffect(() => {
    try {
      loadData() 
    } catch (error) {
      setCoins([{id: 0, name: error.message}])
    }
  }, [])

  return (
    <CryptoProvider>
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <NavBar />
        <Text style={{fontSize: 20, padding: 3}}>Seleccione una criptomoneda:</Text>
        <FlatList
          style={styles.cardContainer}
          horizontal={true}
          data={coins} 
          renderItem={({item}) => <Card title={item.name} url={item.image} />}
          keyExtractor={(item) => item.id}
        />
        <ChartContainer />
      </View>
    </CryptoProvider>
  );
}