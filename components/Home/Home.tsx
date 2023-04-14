import React from "react";
import { FlatList, RefreshControl, Text, View, Platform } from "react-native";
import Filters from "./FIlters/Filters";
import styles from "./Home.styles";
import { stylesOf } from "classnames-rn";
import { useHomeControl } from "./useHome.control";
import Meal from "./Meal/Meal";
import Loader from "../global/Loader/Loader";
import { COLORS } from "../../constants/Colors";
import CustomRefreshControl from "../global/CustomRefreshControl/CustomRefreshControl";

const cn = stylesOf(styles);

export default function Home() {
  const control = useHomeControl();

  if (control.firstLoad) return <Loader />;

  const isAdnroid = Platform.OS === "android";

  return (
    <View style={cn("container")}>
      <Filters />
      {isAdnroid && control.refresh ? (
        <Loader />
      ) : control.meals.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={cn("contentWrapper")}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={control.meals}
          renderItem={({ item }) => <Meal {...item} />}
          refreshControl={CustomRefreshControl({
            refresh: control.refresh,
            onRefresh: control.onRefresh,
          })}
        />
      ) : (
        <View style={cn("emptyWrapper")}>
          <Text style={cn("emptyText")}>Тут ничего нет</Text>
        </View>
      )}
    </View>
  );
}
