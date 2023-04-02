import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants/Colors";
import Home from "../../components/Home/Home";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mainBg }}>
      <StatusBar style='light' />

      <Home />
    </SafeAreaView>
  );
}
