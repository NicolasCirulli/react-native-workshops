import { agentMapper } from "./agents.mappers";
import { agentsApi } from "./api";
import { Agent, ApiResponse } from "./types";

export const getAgents = async (): Promise<Agent[]> => {
  try {
    const { data } = await agentsApi.get<ApiResponse>(
      "/agents?isPlayableCharacter=true"
    );
    const aux = data.data.map(agentMapper);
    return aux;
  } catch (error) {
    console.log(error);
    throw "No se pudo cargar los agentes";
  }
};

export const getAgentById = async (id: string) => {
  try {
    const { data } = await agentsApi.get("/agents/" + id);
    const aux = agentMapper(data.data);
    return aux;
  } catch (error) {
    console.log(error);
    throw "No se pudo cargar el agente";
  }
};
