import React from "react";
import {
  Image,
  ImageStyle,
  Text,
  View,
  Linking,
  ViewStyle,
} from "react-native";
import styles from "./Contacts.styles";
import { stylesOf } from "classnames-rn";
import Button from "../global/Button/Button";
import { Entypo } from "@expo/vector-icons";
import RoundedText from "../global/RoundedText/RoundedText";
import { phoneLink } from "../../utils/phoneLink";

const cn = stylesOf(styles);

export default function Contacts() {
  return (
    <View style={cn("wrapper")}>
      <View style={cn("imageWrapper")}>
        <Image
          style={cn("image") as ImageStyle}
          source={require("../../assets/icons/logo.png")}
        />
      </View>
      <RoundedText label='Адрес'>Ростов-на-Дону, Донская 30</RoundedText>
      <RoundedText label='Телефон' onPress={() => phoneLink("+79885880334")}>
        +7(988)-588-03-34
      </RoundedText>
    </View>
  );
}
