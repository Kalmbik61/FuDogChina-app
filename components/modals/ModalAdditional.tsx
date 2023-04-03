import { Picker } from "@react-native-picker/picker";
import { FlexStyle, Modal, Pressable, Text, View } from "react-native";
import { stylesOf } from "classnames-rn";
import styles from "./ModalAdditional.styles";
import { IModalAdditionalProps } from "./ModalAdditional.props";
import { COLORS } from "../../constants/Colors";
import Button from "../global/Button/Button";

const cn = stylesOf(styles);

export default function ModalAdditional({ ...props }: IModalAdditionalProps) {
  return null;
  //   return (
  //     <BottomModalScrollable
  //       ref={ref}
  //       children={
  //         <View style={cn("container")}>
  //           <View style={cn("wrapper")}>
  //             <View style={cn("header")}>
  //               <Text style={cn("headerText")}>Выберите тип</Text>
  //             </View>
  //             <Picker style={cn("picker")}>
  //               <Picker.Item
  //                 label={"ITEM 1"}
  //                 value={"ITEM 1"}
  //                 color={COLORS.primary}
  //               />
  //               <Picker.Item label={"ITEM 2"} value={"ITEM 2"} />
  //               <Picker.Item label={"ITEM 3"} value={"ITEM 3"} />
  //             </Picker>

  //             <Button styles={cn("btn") as FlexStyle} onPress={() => {}} primary>
  //               Выбрать
  //             </Button>
  //           </View>
  //         </View>
  //       }
  //     />
  //   );
}
