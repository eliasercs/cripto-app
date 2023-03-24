import { Text, View } from 'react-native';
import NavBar from './components/NavBar';
import styles from './utils/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
    </View>
  );
}