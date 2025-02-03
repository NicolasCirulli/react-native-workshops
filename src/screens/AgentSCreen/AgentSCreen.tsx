import { Pressable, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { Link, useLocalSearchParams, useNavigation, router } from "expo-router";

export default function AgentSCreen() {
  const params = useLocalSearchParams();

  return (
    <ScreenWrapper>
      <Text>AgentSCreen</Text>
      <Link asChild href={"/"}>
        <Pressable>
          <Text> Volve al inicio </Text>
        </Pressable>
      </Link>
    </ScreenWrapper>
  );
}
