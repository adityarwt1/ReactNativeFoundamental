import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
export default function RootLayout() {
  return (
    <>
      <ClerkProvider publishableKey={clerkKey}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ClerkProvider>
    </>
  );
}
