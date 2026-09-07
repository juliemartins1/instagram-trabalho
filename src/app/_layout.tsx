import { Stack } from 'expo-router';

import { PostsProvider } from '@/context/posts-context';

export default function RootLayout() {
  return (
    <PostsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </PostsProvider>
  );
}