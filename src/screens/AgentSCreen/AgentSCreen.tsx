import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Agent } from "@/core/services/agents/types";
import { getAgentById } from "@/core/services/agents/agents.services";
export default function AgentSCreen() {
  const [agent, setAgent] = useState<Agent>({ name: "", image: "", uuid: "" });
  const params = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    getAgentById(String(params.agent)).then(setAgent);
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: agent?.name });
  }, [agent]);

  return (
    <ScreenWrapper mt className="items-center">
      <Text className="text-3xl">{agent?.name}</Text>
    </ScreenWrapper>
  );
}
