import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeOne" options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeTwo" options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeThree" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
