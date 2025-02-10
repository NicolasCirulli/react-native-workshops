import { getAgentById } from "@/core/services/agents/agents.services";
import { useQuery } from "@tanstack/react-query";

export default function useAgent(id: string) {
  const queryAgentById = useQuery({
    queryKey: ["agent", id],
    queryFn: () => getAgentById(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { queryAgentById };
}
