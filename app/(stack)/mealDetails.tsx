import { Stack } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import MealDetail from "../../components/MealDetail/MealDetail";

export default function mealDetails() {
  return (
    <ScrollView>
      <Stack.Screen options={{ headerShown: true }} />

      <MealDetail />
    </ScrollView>
  );
}
