import React, { useEffect, useState } from "react";
import { Text, Pressable, Image } from "react-native";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { getAgents } from "@/core/services/agents/agents.services";
import { Agent } from "@/core/services/agents/types";

export default function AgentsScreen() {
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    getAgents().then((res) => {
      setAgents(res);
    });
  }, []);

  const handlePress = (id: string) => {
    router.push("agent/" + id);
  };

  if (agents.length == 0) {
    return <Text> Cargando....</Text>;
  }
  return (
    <ScreenWrapper className="items-center">
      <Text className="p-5 text-center font-bold text-3xl">Agentes</Text>
      <FlatList
        data={agents}
        renderItem={({ item }) => (
          <Pressable
            className="bg-gray-200 rounded-lg mb-5"
            onPress={() => handlePress(item.uuid)}
          >
            <Text className="text-xl text-center"> {item.name} </Text>
            <Image
              resizeMode="contain"
              source={{ uri: item.image }}
              width={350}
              height={250}
            />
          </Pressable>
        )}
      />
    </ScreenWrapper>
  );
}
