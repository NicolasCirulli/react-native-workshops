import { ActivityIndicator, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { Redirect, useLocalSearchParams } from "expo-router";

export default function AgentSCreen() {
  const { nombre } = useLocalSearchParams();

  const loading = true;

  if (loading) return <ActivityIndicator />;

  if (!nombre) return <Redirect href={"/"} />;
  return (
    <ScreenWrapper>
      <Text>AgentSCreen</Text>
    </ScreenWrapper>
  );
}
