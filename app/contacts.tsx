import React from "react";
import { SafeAreaView } from "react-native";
import Contacts from "../components/Contacts/Contacts";
import { COLORS } from "../constants/Colors";

export default function contacts() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mainBg }}>
      <Contacts />
    </SafeAreaView>
  );
}
