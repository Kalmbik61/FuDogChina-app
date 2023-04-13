import React from "react";
import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import Filters from "./FIlters/Filters";
import styles from "./Home.styles";
import { stylesOf } from "classnames-rn";
import { useHomeControl } from "./useHome.control";
import Meal from "./Meal/Meal";
import Loader from "../global/Loader/Loader";
import { COLORS } from "../../constants/Colors";

const cn = stylesOf(styles);

export default function Home() {
  const control = useHomeControl();

  return (
    <View style={cn("container")}>
      <Filters />

      {/* <ScrollView
        contentContainerStyle={cn("contentWrapper")}
        showsVerticalScrollIndicator={false}
      >
        {control.loading ? (
          <Loader />
        ) : control.meals.length > 0 ? (
          control.meals.map((m, i) => <Meal {...m} key={m.id} />)
        ) : (
          <View style={cn("emptyWrapper")}>
            <Text style={cn("emptyText")}>Тут ничего нет</Text>
          </View>
        )}
      </ScrollView> */}
      {control.meals.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={cn("contentWrapper")}
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={control.meals}
          renderItem={({ item }) => <Meal {...item} />}
          refreshControl={
            <RefreshControl
              refreshing={control.refresh}
              onRefresh={control.onRefresh}
              size={24}
              colors={[COLORS.primary]}
              tintColor={COLORS.primary}
            />
          }
        />
      ) : (
        <View style={cn("emptyWrapper")}>
          <Text style={cn("emptyText")}>Тут ничего нет</Text>
        </View>
      )}
    </View>
  );
}
