import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawer}>
        <Drawer.Screen name="(tabs)" options={{ title: "Inicio" }} />
        <Drawer.Screen name="settings" options={{ title: "Configuracion" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View className="mt-40">
      <Text className="mb-20"> Custom </Text>
      <DrawerItemList {...props} />
    </View>
  );
};
