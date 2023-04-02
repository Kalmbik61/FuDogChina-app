import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { IMealProps } from "./Meal.props";
import { stylesOf } from "classnames-rn";
import styles from "./Meal.styles";
import Button from "../../global/Button/Button";
import { useMealControl } from "./useMeal.control";

const cn = stylesOf(styles);

export default function Meal({ ...props }: IMealProps) {
  const { imageUrl, name, price, additional, type } = props;

  const control = useMealControl(props);

  const renderPrice = () => {
    if (additional) {
      return `от ${price.toFixed(2)} \u20BD`;
    }
    return `${price.toFixed(2)} \u20BD`;
  };

  return (
    <TouchableOpacity onPress={control.toMealDetails}>
      <View style={cn("wrapper")}>
        <View style={cn("imageWrapper")}>
          <Image
            source={{ uri: imageUrl }}
            style={cn("image")}
            resizeMode='cover'
          />
        </View>
        <View style={cn("textWrapper")}>
          <Text style={cn("text")}>{name}</Text>
        </View>

        <View style={cn("priceWrapper")}>
          <Text style={cn("price")}>{renderPrice()}</Text>
        </View>

        <Button onPress={() => {}} primary>
          Добавить
        </Button>
      </View>
    </TouchableOpacity>
  );
}
