import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import React from "react";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenWrapper mt className="justify-center items-center">
      <Text className="text-5xl text-blue-600 font-bold">Inicio</Text>
    </ScreenWrapper>
  );
}
