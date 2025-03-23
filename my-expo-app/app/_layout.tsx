import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Головна' }} />
      <Stack.Screen name="details" options={{ title: 'Деталі' }} />
      <Stack.Screen name="profile/index" options={{ title: 'Профіль' }} />
      <Stack.Screen name="profile/settings" options={{ title: 'Налаштування' }} />
    </Stack>
  );
}
