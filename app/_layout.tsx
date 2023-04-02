import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, useRouter, usePathname, Link } from "expo-router";
import { useEffect } from "react";
import { COLORS } from "../constants/Colors";
import { Drawer } from "expo-router/drawer";
import { ROUTS } from "../utils/routesNames";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(stack)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const path = usePathname();
  const router = useRouter();

  const drawerHandlerLock = () => {
    if (path !== ROUTS.MENU && path !== `/${ROUTS.CONTACTS}`) {
      return true;
    } else return false;
  };

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        drawerActiveBackgroundColor: COLORS.primary,
        drawerContentContainerStyle: { backgroundColor: COLORS.darkBg },
        drawerStyle: {
          backgroundColor: COLORS.darkBg,
        },
        drawerLabelStyle: { color: "#FFF" },
        swipeEnabled: !drawerHandlerLock(),
        headerLeft: drawerHandlerLock() ? () => <></> : undefined,
        headerRight: ({ tintColor }) => (
          <Link href={ROUTS.CART} asChild>
            <TouchableOpacity>
              <AntDesign
                name='shoppingcart'
                size={24}
                color={tintColor}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
          </Link>
        ),
      }}
    >
      <Drawer.Screen
        name='(stack)'
        options={{
          title: "Menu",
          headerTitle: "Fu dog",
        }}
      />
      <Drawer.Screen
        name={ROUTS.CONTACTS}
        options={{
          title: "Contacts",
          headerTitle: "Contacts",
          drawerLabel: "Contacts",
        }}
      />
    </Drawer>
  );
}
