import { Pressable, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { agents } from "@/core/services/data";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function AgentSCreen() {
  const params = useLocalSearchParams();

  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  const agent = agents.find((agent) => agent.name == params.agent);

  return (
    <ScreenWrapper className="items-center">
      <Pressable className="w-full p-5" onPress={handleBack}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
      <Text className="text-3xl">{agent?.name}</Text>
    </ScreenWrapper>
  );
}
