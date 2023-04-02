import { Stack } from "expo-router";
import React from "react";
import { COLORS } from "../../constants/Colors";

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
    />
  );
}
