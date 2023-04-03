import { Stack } from "expo-router";
import React from "react";
import { COLORS } from "../../constants/Colors";
import { ROUTS } from "../../utils/routesNames";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTS.CART}
        options={{
          presentation: "modal",
          headerShown: true,
          title: "Ваш заказ",
        }}
      />
    </Stack>
  );
}
