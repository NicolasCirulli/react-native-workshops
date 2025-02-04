import React from "react";
import { Text, Pressable, Image } from "react-native";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { agents } from "@/core/services/data";

export default function AgentsScreen() {
  const handlePress = (name: string) => {
    router.push("agent/" + name);
  };
  return (
    <ScreenWrapper className="items-center">
      <Text className="p-5 text-center font-bold text-3xl">Agentes</Text>
      <FlatList
        data={agents}
        renderItem={({ item }) => (
          <Pressable
            className="bg-gray-200 rounded-lg mb-5"
            onPress={() => handlePress(item.name)}
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
