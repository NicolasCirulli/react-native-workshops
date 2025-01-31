import { View, Text, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { Link } from "expo-router";

const agents = ["uno", "dos", "tres"];

export default function AgentsScreen() {
  return (
    <ScreenWrapper>
      <Text>AgentsScreen asdasd</Text>

      {agents.map((agent) => (
        <Link
          key={agent}
          asChild
          href={{
            pathname: `/${agent}`,
            params: {},
          }}
        >
          <Pressable>
            <Text> {agent} </Text>
          </Pressable>
        </Link>
      ))}
    </ScreenWrapper>
  );
}
