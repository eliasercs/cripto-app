import { useContext, useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { CryptoContext } from "../context/CryptoContext";

import Chart from "./Chart";

const ChartContainer = () => {
  const { crypto, label, max } = useContext(CryptoContext);

  const data = {
    datasets: [
      {
        data: max,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [`Flujo de valores de ${crypto.name})`], // optional
  };

  return (
    <View
      style={{
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {crypto.name !== "" ? (
        <>
          <Text>{crypto.name}</Text>
          {
            max.length > 0 ? <Chart data={data} /> : <></>
          }
        </>
      ) : (
        <Text>Seleccione una criptomoneda para continuar</Text>
      )}
    </View>
  );
};

export default ChartContainer;
