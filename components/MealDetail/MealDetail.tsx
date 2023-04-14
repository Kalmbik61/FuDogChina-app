import { useCallback } from "react";
import {
  Image,
  ImageStyle,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { IMealDetailProps } from "./MealDetail.props";
import { useMealDetailsControl } from "./useMealDetail.control";
import Loader from "../global/Loader/Loader";
import styles from "./MealDetails.styles";
import { stylesOf } from "classnames-rn";
import logo from "../../assets/icons/logo.png";
import Button from "../global/Button/Button";
import { COLORS } from "../../constants/Colors";
import { RUB } from "../../constants/Currency";
import BottomSheet from "../global/BottomSheet/BottomSheet";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

const cn = stylesOf(styles);

export default function MealDetails({ ...props }: IMealDetailProps) {
  const control = useMealDetailsControl(props);

  if (control.loading) return <Loader size={24} />;

  if (!control.details) {
    return (
      <View style={cn("errorWrapper")}>
        <View style={cn("errorImageContainer")}>
          <Image
            source={logo}
            style={cn("errorImage") as ImageStyle}
            resizeMode='contain'
          />
        </View>

        <Text style={cn("error")}>Нет описания</Text>
      </View>
    );
  }

  const renderPrice = () => {
    if (control.details?.additional && !control.selectedAdditional) {
      return `от ${control.details?.price.toFixed(2)} ${RUB}`;
    } else if (control.selectedAdditional)
      return `${control.selectedAdditional.additionalPriceOption.toFixed(
        2
      )} ${RUB}`;
    return `${control.details?.price.toFixed(2)} ${RUB}`;
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={cn("container")}
        showsVerticalScrollIndicator={false}
      >
        <View style={cn("imageWrapper")}>
          <Image
            source={{ uri: control.details?.imageUrl }}
            resizeMode='cover'
            style={cn("image") as ImageStyle}
          />
        </View>

        <View style={cn("divider")} />

        <View style={cn("nameWrapper")}>
          <Text style={cn("name")}>{control.details.name}</Text>
        </View>

        {control.details.description &&
          control.details.description.length > 0 && (
            <View style={cn("descriptionWrapper")}>
              <Text style={cn("description")}>
                {control.details.description}
              </Text>
            </View>
          )}

        <View style={cn("priceWrapper")}>
          <Text style={cn("price")}>{renderPrice()}</Text>
        </View>

        {control.details.additional && (
          <TouchableOpacity onPress={() => control.onBottomHandler()}>
            <View style={cn("additionalWrapper")}>
              <Text style={cn("additional")}>
                {control.selectedAdditional?.additionalNameOption ||
                  "Выберите наполнитель"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>

      <Button
        onPress={control.addMeal}
        styles={cn("buttonWrapper") as ViewStyle}
        disabled={!!control.details.additional && !control.selectedAdditional}
        primary
      >
        В корзину
      </Button>

      <BottomSheet controlerRef={control.bottomRef}>
        <View style={cn("bottomContentWrapper")}>
          {control.details.additional?.map((item, i) => (
            <View style={cn("typeWrapper")} key={item.additionalNameOption}>
              <Pressable
                style={cn("checkbox")}
                onPress={() => control.onSelectedAdditional(i)}
              >
                <AnimatedCheckbox
                  checked={
                    control.selectedAdditional?.additionalNameOption ===
                    item.additionalNameOption
                  }
                  highlightColor={COLORS.linghtGrey}
                  checkmarkColor={COLORS.primary}
                  boxOutlineColor={COLORS.primary}
                />
              </Pressable>
              <View style={cn("typeTextWrapper")}>
                <Text style={cn("typeTex")}>{item.additionalNameOption}</Text>
                <Text style={cn("typePrice")}>
                  {item.additionalPriceOption} {RUB}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </BottomSheet>
    </>
  );
}
