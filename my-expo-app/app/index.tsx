import { Link, router } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Головна сторінка</Text>
        <Button title="Перейти на Деталі" onPress={() => {
          // console.log("replace route");
          router.replace('/details');
        }} />
        <Button title="Перейти в Профіль" onPress={() => {
          router.replace('/profile');
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
