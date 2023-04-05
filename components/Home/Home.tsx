import { useRouter } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import Filters from "./FIlters/Filters";
import styles from "./Home.styles";
import { View } from "react-native";
import { stylesOf } from "classnames-rn";
import { useHomeControl } from "./useHome.control";
import Meal from "./Meal/Meal";

const cn = stylesOf(styles);

export default function Home() {
  const route = useRouter();

  const control = useHomeControl();

  return (
    <View style={cn("container")}>
      <Filters />

      <ScrollView
        contentContainerStyle={cn("contentWrapper")}
        showsVerticalScrollIndicator={false}
      >
        {control.meals.map((m, i) => (
          <Meal {...m} key={m.id} />
        ))}
      </ScrollView>
    </View>
  );
}
