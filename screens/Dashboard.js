import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import Card from "../components/Card";
import ChartContainer from "../components/ChartContainer";
import NavBar from "../components/NavBar";
import { CryptoProvider } from "../context/CryptoContext";
import styles from "../utils/styles";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  async function loadData() {
    const res = await fetch(
      "https://api.coincap.io/v2/assets"
    );
    if (!res.ok) {
      throw new Error("Error al realizar petición.");
    }
    const data = await res.json();

    //console.log(data["data"])

    setCoins(data["data"]);
  }

  useEffect(() => {
    try {
      loadData();
    } catch (error) {
      setCoins([{ id: 0, name: error.message }]);
      console.log(error.message);
    }
  }, []);

  return (
    <CryptoProvider>
      <View style={styles.container}>
        <NavBar />
        <Text style={{ fontSize: 20, padding: 3 }}>
          Seleccione una criptomoneda:
        </Text>
        <FlatList
          style={styles.cardContainer}
          horizontal={true}
          data={coins}
          renderItem={({ item }) => (
            <Card title={item.name} id={item.id} price={Math.round(item.priceUsd)} />
          )}
          keyExtractor={(item) => item.id}
        />
        <ChartContainer />
      </View>
    </CryptoProvider>
  );
};

export default Dashboard;
