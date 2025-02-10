import { Agent, AgentResponse } from "./types";

export const agentMapper = (obj: AgentResponse): Agent => {
  return {
    name: obj.displayName,
    image: obj.fullPortrait,
    uuid: obj.uuid,
  };
};
