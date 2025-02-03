import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import React from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Text className="text-3xl text-red-700">Home Screen</Text>
    </ScreenWrapper>
  );
}
