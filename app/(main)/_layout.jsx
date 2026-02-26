import { Stack } from 'expo-router';

export default function MainLayout() {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="courses" options={{ headerShown: true, title: 'Courses' }} />
            <Stack.Screen name="course-details" options={{ headerShown: false }} />
        </Stack>
    );
}
