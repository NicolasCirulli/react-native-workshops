import React, { useEffect } from "react";
import { Text } from "react-native";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { agents } from "@/core/services/data";
export default function AgentSCreen() {
  const params = useLocalSearchParams();

  const navigation = useNavigation();

  const agent = agents.find((agent) => agent.name == params.agent);

  useEffect(() => {
    navigation.setOptions({ title: agent?.name });
  }, [agent]);

  return (
    <ScreenWrapper mt className="items-center">
      <Text className="text-3xl">{agent?.name}</Text>
    </ScreenWrapper>
  );
}
