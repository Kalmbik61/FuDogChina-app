import { useSearchParams, useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../../constants/Colors";
import MealDetails from "../../../components/MealDetail/MealDetail";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../../../components/global/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MealDetailScreen() {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.mainBg }}>
      <Stack.Screen
        options={{
          title: params.title as string,
          headerShown: true,
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={router.back}>
              <MaterialCommunityIcons
                name='backburger'
                size={24}
                color={tintColor}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <MealDetails id={params.id as string} />
    </SafeAreaView>
  );
}
