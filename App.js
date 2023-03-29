import {SafeAreaView} from "react-native"
import MainStack from "./navigation/MainStack"

export default function App() {
  return <SafeAreaView style={{flex: 1}}>
    <MainStack />
  </SafeAreaView>
}
