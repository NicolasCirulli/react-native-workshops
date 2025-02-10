import { getAgents } from "@/core/services/agents/agents.services";
import { useQuery } from "@tanstack/react-query";

export default function useAgents() {
  const queryAllAgents = useQuery({
    queryKey: ["agents"],
    queryFn: getAgents,
  });

  return { queryAllAgents };
}
