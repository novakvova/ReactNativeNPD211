import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Налаштування профілю</Text>
      <Button title="Назад" onPress={() => router.replace('/profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
