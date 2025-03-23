import { router } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Сторінка деталей</Text>
      <Button title="Назад" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
