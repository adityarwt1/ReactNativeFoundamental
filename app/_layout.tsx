import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <ClerkProvider>
        <Navbar />
        <Stack />
      </ClerkProvider>
    </>
  );
}
