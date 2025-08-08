import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <ClerkProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </ClerkProvider>
    </>
  );
}
