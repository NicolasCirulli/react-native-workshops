import { Tabs, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";

export default function TabsLayout() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={24}
            color={"gray"}
            className="ml-2"
            onPress={handlePress}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Valorant",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Agentes",
          headerTitleAlign: "center",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
