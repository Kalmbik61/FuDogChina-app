import React from "react";
import { ScrollView, Text } from "react-native";
import Filter from "./Filter/Filter";
import { stylesOf } from "classnames-rn";
import styles from "./Filters.styles";
import { useFiltersControl } from "./useFilters.control";

const cn = stylesOf(styles);

export default function Filters() {
  const control = useFiltersControl();

  return (
    <ScrollView style={cn("wrapper")} horizontal>
      {control.filters.map((f) => (
        <Filter
          active={f === control.activeFilter}
          onPress={() => control.onChangeActiveFilter(f)}
          key={f}
        >
          {f}
        </Filter>
      ))}
    </ScrollView>
  );
}
