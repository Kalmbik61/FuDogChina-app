import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageStyle,
  ViewStyle,
} from "react-native";
import { IMealProps } from "./Meal.props";
import { stylesOf } from "classnames-rn";
import styles from "./Meal.styles";
import Button from "../../global/Button/Button";
import { useMealControl } from "./useMeal.control";
import { RUB } from "../../../constants/Currency";

const cn = stylesOf(styles);

export default function Meal({ ...props }: IMealProps) {
  const { imageUrl, name, price, additional, type } = props;

  const control = useMealControl(props);

  const renderPrice = () => {
    if (additional) {
      return `от ${price.toFixed(2)} ${RUB}`;
    }
    return `${price.toFixed(2)} ${RUB}`;
  };

  return (
    <TouchableOpacity onPress={control.toMealDetails}>
      <View style={cn("wrapper")}>
        <View style={cn("imageWrapper")}>
          <Image
            source={{ uri: imageUrl }}
            style={cn("image") as ImageStyle}
            resizeMode='cover'
          />
        </View>
        <View style={cn("textWrapper")}>
          <Text style={cn("text")} numberOfLines={1}>
            {name}
          </Text>
        </View>

        <View style={cn("priceWrapper")}>
          <Text style={cn("price")}>{renderPrice()}</Text>
        </View>

        <Button
          onPress={!!props.additional ? control.toMealDetails : control.addMeal}
          primary
        >
          {!!props.additional ? "Подробнее" : "Добавить"}
        </Button>
      </View>
    </TouchableOpacity>
  );
}
