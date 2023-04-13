import React from "react";
import { ScrollView } from "react-native";
import Filter from "./Filter/Filter";
import { stylesOf } from "classnames-rn";
import styles from "./Filters.styles";
import { FILTERS, useFiltersControl } from "./useFilters.control";

const cn = stylesOf(styles);

export default function Filters() {
  const control = useFiltersControl();

  return (
    <ScrollView style={cn("wrapper")} horizontal>
      {control.filters.map((f) => (
        <Filter
          active={f.id === control.activeFilter.id}
          onPress={() => control.onChangeActiveFilter(f)}
          key={f.id}
        >
          {FILTERS[f.name]}
        </Filter>
      ))}
    </ScrollView>
  );
}
