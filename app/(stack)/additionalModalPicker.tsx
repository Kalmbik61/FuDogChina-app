import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function additionalModalPicker() {
  return (
    <View>
      <Picker>
        <Picker.Item label={"ITEM 1"} value={"ITEM 1"} />
        <Picker.Item label={"ITEM 2"} value={"ITEM 2"} />
        <Picker.Item label={"ITEM 3"} value={"ITEM 3"} />
      </Picker>
    </View>
  );
}
