import { StatusBar } from 'expo-status-bar';
import BottomNavigation from './BottomNavigation/BottomNavigation';

export default function App() {
  return (
    <View style={styles.container}>
     <BottomNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
