import React, { useEffect } from "react";
import { Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import useAgent from "@/hooks/useAgent";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
export default function AgentSCreen() {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const { queryAgentById } = useAgent(String(params.agent));

  useEffect(() => {
    navigation.setOptions({ title: queryAgentById.data?.name });
  }, [queryAgentById.data]);

  if (queryAgentById.isLoading) {
    return <Text> Cargando....</Text>;
  }

  return (
    <ScreenWrapper mt className="items-center">
      <Text className="text-3xl">{queryAgentById.data?.name}</Text>
    </ScreenWrapper>
  );
}
