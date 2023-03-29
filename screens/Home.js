import { ScrollView, View, Text, Image, Button } from "react-native";
import styles from "../utils/HomeStyles";

const ViewScreen = ({ title, bgcolor, description, img, action }) => {

  return (
    <View style={{ ...styles.firstView, backgroundColor: bgcolor }}>
      <View style={{ flexDirection: "column" }}>
        {title && <Text style={styles.headerTitle}>{title}</Text>}
        {img && <Image style={styles.image} source={img} />}
        {description && <Text style={styles.description}>{description}</Text>}
        {action && (
          <Button
            title={action.btnValue}
            color={action.color}
            onPress={action.touch}
          />
        )}
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {

  return (
    <View style={styles.homeContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
      >
        <ViewScreen
            title={"¿Qué es CryptoApp"}
            bgcolor={"#3f51b5"}
            description={"CryptoApp es la mejor aplicación con la que podrás gestionar el mercado de las criptomonedas con solo tus manos."}
            img={require("../assets/finanzas.png")}
        />
        <ViewScreen
            title={"Precio Histórico"}
            bgcolor={"#ef476f"}
            description={"Podrás visualizar el precio histórico en los últimos 7 días de la criptomoneda de tu preferencia."}
            img={require("../assets/grafico.png")}
        />
        <ViewScreen
            bgcolor={"#f24c00"}
            description={"Para acceder a la aplicación, toque en el siguiente botón."}
            action={{
                btnValue: "Acceder",
                color: "#6700a1",
                touch: () => {
                    navigation.navigate("Dashboard")
                }
            }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
