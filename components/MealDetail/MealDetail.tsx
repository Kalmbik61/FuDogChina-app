import React from "react";
import {
  Image,
  ImageStyle,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { IMealDetailProps } from "./MealDetail.props";
import { useMealDetailsControl } from "./useMealDetail.control";
import Loader from "../global/Loader/Loader";
import styles from "./MealDetails.styles";
import { stylesOf } from "classnames-rn";
import logo from "../../assets/icons/logo.png";
import Button from "../global/Button/Button";
import { COLORS } from "../../constants/Colors";
import ModalAdditional from "../modals/ModalAdditional";
import { RUB } from "../../constants/Currency";

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
    if (control.details?.additional) {
      return `от ${control.details?.price.toFixed(2)} ${RUB}`;
    }
    return `${control.details?.price.toFixed(2)} ${RUB}`;
  };

  return (
    <ScrollView
      contentContainerStyle={cn("container")}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={control.refresh}
          onRefresh={control.onRefresh}
          colors={[COLORS.primary]}
          tintColor={COLORS.primary}
          size={24}
        />
      }
    >
      {control.details.additional && (
        <ModalAdditional
          show={control.modalShow}
          onCloseModal={() => control.onModalHandler(false)}
          onSelectValue={() => {}}
          additional={control.details.additional}
        />
      )}

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
            <Text style={cn("description")}>{control.details.description}</Text>
          </View>
        )}

      <View style={cn("priceWrapper")}>
        <Text style={cn("price")}>{renderPrice()}</Text>
      </View>

      {/* {control.details.additional && (
        <Picker
          selectedValue={
            control.selectedAdditional &&
            Object.keys(control.selectedAdditional)[0]
          }
          onValueChange={control.onSelectedAdditional}
          style={{ margin: 0, padding: 0 }}
        >
          {control.details.additional.map((item, i) => {
            const key = Object.keys(item)[0];
            return <Picker.Item label={key} value={item[key]} key={key} />;
          })}
        </Picker>
      )} */}

      <Button onPress={() => control.onModalHandler(true)} primary>
        Выбрать
      </Button>

      <Button onPress={() => {}} primary>
        В корзину
      </Button>
    </ScrollView>
  );
}
