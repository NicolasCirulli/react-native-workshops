import React, { useEffect, useState } from "react";
import {
  Text,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  View,
  Alert,
  TextInput,
} from "react-native";
import ScreenWrapper from "@/core/components/wrappers/ScreenWrapper";
import { router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { Agent } from "@/core/services/agents/types";
import useAgents from "@/hooks/useAgents";

export default function AgentsScreen() {
  const { queryAllAgents } = useAgents();
  const [agents, setAgents] = useState<Agent[] | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSeleted] = useState<Agent>({
    name: "",
    image: "",
    uuid: "",
  });

  useEffect(() => {
    setAgents(queryAllAgents.data || []);
  }, [queryAllAgents.data]);

  const handlePress = (id: string) => {
    router.push("agent/" + id);
  };

  const handleChangeText = (e: string) => {
    const filtered = queryAllAgents.data?.filter((agent: Agent) =>
      agent.name.toLowerCase().startsWith(e.toLowerCase().trim())
    );
    setAgents(filtered);
  };

  const handleLongPress = (agent: Agent) => {
    setSeleted(agent);
    setModalVisible(!modalVisible);
  };

  if (queryAllAgents.isLoading) {
    return <Text> Cargando....</Text>;
  }
  return (
    <ScreenWrapper className="items-center">
      <Text className="p-5 text-center font-bold text-3xl">Agentes</Text>
      <TextInput
        onChangeText={handleChangeText}
        className="border border-1 border-red-200 w-48 my-5"
      />
      <FlatList
        data={agents}
        renderItem={({ item }) => (
          <Pressable
            className="bg-gray-200 rounded-lg mb-5"
            onPress={() => handlePress(item.uuid)}
            onLongPress={() => handleLongPress(item)}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selected.name}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
