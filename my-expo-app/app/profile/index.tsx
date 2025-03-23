import { Link, router, useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Сторінка профілю</Text>
        <Button title="Налаштування"  onPress={() => router.replace('profile/settings')}/>
      <Button title="Назад"  onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
