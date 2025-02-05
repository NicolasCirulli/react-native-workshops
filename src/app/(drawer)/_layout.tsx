import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from "@react-navigation/drawer";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawer}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Inicio",
            headerShown: false,
            drawerIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Configuracion",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="setting" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View className="mt-12">
      <Text className="mb-4 text-center"> Custom </Text>
      <DrawerItemList {...props} />
    </View>
  );
};
